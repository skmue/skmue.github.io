(function () {
	const miniMapHostname = 'map.powderguide.com'; const miniMapPathSegment = '/embed/mini';
	const iframes = [];
	const informed = new WeakSet(); const visible = new WeakSet();
	const notifyIntervals = new WeakMap(); const notifyAttempts = new WeakMap();
	const observed = new WeakSet();
	const maxNotifyAttempts = 10;
	const isMiniMapIframe = (iframe) => {
		try {
			const url = new URL(iframe.src, window.location.href);
			return (url.hostname === miniMapHostname && url.pathname.includes(miniMapPathSegment));
		} catch (_e) { return false; }
	};
	const registerIframe = (iframe, observer) => {
		if (!iframe || observed.has(iframe) || !isMiniMapIframe(iframe)) { return; }
		iframes.push(iframe);
		observed.add(iframe);
		if (observer) {
			observer.observe(iframe);
		} else {
			visible.add(iframe); startNotifyLoop(iframe);
		}
	};
	const notifyIframeVisible = (iframe) => {
		if (!iframe || informed.has(iframe) || !iframe.contentWindow) { return; }
		iframe.contentWindow.postMessage({ type: 'MINIMAP_VISIBLE' }, '*');
	};
	const startNotifyLoop = (iframe) => {
		if (notifyIntervals.has(iframe)) { return; }
		const intervalId = window.setInterval(() => {
			const attempts = notifyAttempts.get(iframe) || 0;
			if (informed.has(iframe)) { window.clearInterval(intervalId); notifyIntervals.delete(iframe); return; }
			if (attempts >= maxNotifyAttempts) { informed.add(iframe); window.clearInterval(intervalId); notifyIntervals.delete(iframe); return; }
			if (!visible.has(iframe)) { return; }
			notifyAttempts.set(iframe, attempts + 1);
			notifyIframeVisible(iframe);
		}, 600);
		notifyIntervals.set(iframe, intervalId);
	};
	const observer = ('IntersectionObserver' in window)
		? new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) { visible.add(entry.target); startNotifyLoop(entry.target); observer.unobserve(entry.target); }
				});
			},
			{ root: null, threshold: 0.1 }
		)
		: null;

	Array.from(document.querySelectorAll('iframe[src]')).forEach((iframe) => { registerIframe(iframe, observer); });

	window.addEventListener('message', (event) => {
		if (event?.data?.type !== 'MINIMAP_REGISTER') { return; }
		const iframe = Array.from(document.querySelectorAll('iframe[src]')).find((item) => item.contentWindow === event.source);
		if (!iframe) { return; }
		registerIframe(iframe, observer);
		event.source.postMessage({ type: 'MINIMAP_REGISTER_ACK' }, '*');
	});

	window.addEventListener('message', (event) => {
		if (event?.data?.type !== 'MINIMAP_VISIBLE_ACK') { return; }
		const iframe = iframes.find((item) => item.contentWindow === event.source);
		if (!iframe) { return; }
		informed.add(iframe);
		const intervalId = notifyIntervals.get(iframe);
		if (intervalId) { window.clearInterval(intervalId); notifyIntervals.delete(iframe); }
	});
})();


