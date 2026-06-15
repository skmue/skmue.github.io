+++
title = 'PowderGuide'
+++
In the summer of 2023 me and [croox.com](https://croox.com/) started developing a weather service, dedicated to winter mountain activities, in particular skitouring and freeride, and it is operational ever since winter 2023/24 on [powderguide.com](map.powderguide.com). We process and visualize the ICON numerical weather forecasts run by the german weather service [DWD](https://www.dwd.de/EN/research/weatherforecasting/num_modelling/01_num_weather_prediction_modells/icon_description.html). In its third version we are presenting these forecasts on a three-dimensional map and we in this article summarize the developments. 
<iframe src="https://map.powderguide.com/de/embed/mini/?b=72&c%5Blng%5D=6.8647&c%5Blat%5D=45.8327&date=today&day=072&p=1&t=71.5&varName=snow_gsp_noJnsd__lsfwe&z=12.5" 
            width="500"
            height="500"
            style="border: none;">
        Your browser does not support iframes.
</iframe>

<script src="./js/pwg-minimap-observer.js"></script>
Further my interpretation of meteograms, referred to as PowderGrams, were operationalized and are documented [in this article](https://powderguide.com/en/magazine/news/powderguide-map-tutorial-powdergram). 

<div style="display:flex; gap:1rem;">
    {{< figure
        src="/photos/powdergram_monteflop_46.486412_13.154232_dordolla_46.46749_13.19309_circumference_14_20260218_icon-d2-eps_eday.webp"
        width="100"
        alt=""
        caption="PowderGram for Monte Flop and Dordolla, in Friuli, 18/02/2026: Sunny today and heavy precipitation tomorrow, with amounts of fresh snow on the mountain of over 30cm and just as much rain in the valley. The expected density of fresh snow is correspondingly high, i.e. not very powdery."
    >}}
    {{< figure
        src="/photos/powdergram_zugspitze_47.421212_10.986294_garmisch-partenkirchen_47.50619_11.09707_circumference_2_20260217_icon-eu-eps_eday.webp"
        width="100"
        alt=""
        caption="The PowderGram for the Zugspitze and Garmisch-Partenkirchen, Bavaria, 17/02/2026: Currently and for the next few days snowfall down to the valley because no rain. No radiation due to persistent cloud cover but nevertheless warming of the snow cover during the day. Wind speeds weak, from westerly directions."
        
    >}}
</div>
# Expedition Meteorology
In spring of 2026 Powderguide partnered up with endurance athlete Tobias Renggli, who, together with our friend and mountain goat Heli Hoffmann and polar scientist Laetitia Lam, intended to scale, as the first of many mountains in America, Denali in Alaska, the tallest of the USA. So I became their expedition's meteorologist. I refined my primary tool, the PowderGram, feeding it with 
* the global ICON forecast, for an estimate of the mid-range (7.5 day) weather conditions, and with 
* high-resolution forecasts for the mountains of Alaska, WRF-HRRR, run by [NCEP](https://www.weather.gov/ncep/), for the most precise short-term (48h) forecast.. 

The advantages of this approach are most importantly
* all information in one graph
* I know what is done
* confronting valley, mountain and circumference. 

<!-- {{< figure
    src="/photos/PowderGram_DenaliSummit_63.069115_-151.006239_DenaliCampIII_63.073822_-151.151154_circumference_4_icon-eps_EDAY.png"
    width="60%"
    alt=""
    caption="PowderGram for Camp III and the Summit of Denali, 06/03/2026: Sunny and calm conditions for the next 4 days predicted."
>}}

{{< figure
    src="/photos/PowderGram_DenaliSummit_63.069113_-151.006243_DenaliCampIV-14000_63.069813_-151.076996_circumference_2_WRF-HRRR-AK_EDAY.png"
    width="60%"
    alt=""
    caption="PowderGram for Camp IV and the Summit of Denali, 10/05/2026: "
>}} -->

# Denali, 6190m, on 15/05/2026

My team summitted in the afternoon of the 15th of June in 2026, as the first of the season. The following were my forecasts:

[Forecast as of 14/05/2026] [16 AKDT]

Tomorrow, 15/05 | Camp IV - CampV Conditions: Clouds passing by in calm winds!
☀️ SUN: little chances for sunshine, but not none.
👁️ VISIBILITY: Limited and variable visibility, no long-lasting whiteout forecasted.
💨 WIND: Winds turn northerly. They are calm with speeds less than 20 km/h and little gustiness.
☁️ CLOUDS: Intermittent low and mid-level cloudiness.
🌧️ PRECIP: Light snowfalls forecasted around 3PM. Accumulations less than 5 cm.
🌡️ TEMPS: Temperatures at Camp IV [4300 m.a.s.l] around -20°C, wind chill temp. around -25°C, at CampV [5225 m.a.s.l] around -30°C, wind chill temperature around -40°C. Pressure rising again, advection of slightly cooler and drier air, but wind chill effect is weak.

The day after tomorrow, 16/05 | CampV - Denali Summit Conditions: Sunshine in significant winds!
☀️ SUN: high chances for sunshine from 9 AM on.
👁️ VISIBILITY: Great visibility.
💨 WIND: Winds turn back south-south-westerly. They speed up to 30-40 km/h, with gusts around 50 km/h.
☁️ CLOUDS: Little cloudiness forecasted.
🌧️ PRECIP: No precipitation forecasted.
🌡️ TEMPS: Temperatures at CampV [5225 m.a.s.l] around -35°C, wind chill effect is significant, and can be as low as -55°C. On the summit [6190 m.a.s.l.], temperatures around -45°C, wind chill temperatures can go below -60°C.

*for which I used mainly used these two PowderGrams, one using WRF-HRRR-AK and one ICON, for valley location Camp IV and mountain Denali summit:*

<div style="display:flex; gap:1rem;">
    {{< figure 
    src="/photos/PowderGram_DenaliSummit_63.069115_-151.006239_DenaleCampIII_63.073822_-151.151154_circumference_4_icon-eps_EDAY.png" 
    width="77%" >}}
    {{< figure 
    src="/photos/PowderGram_DenaliSummit_63.069115_-151.006239_DenaleCampIII_63.073822_-151.151154_circumference_4_icon-eps_EDAY.png" 
    width="77%" 
    caption="" >}}
</div>

*and finally I advised.*

Summit Push Situation:
15/05: I see this day due to calm winds and despite limited visibility as favorable for getting back up to Camp V.
16/05: I must warn in regards of the winds, and the wind chill temperatures. Else, I see excellent visibility until late in the day, and obviously no precipitation. Only by midnight cloudiness is forecasted to return.
17/05: Winds remain at moderate speeds, gustiness increasing, maybe to beyond -75 km/h. Unmounting Camp V can pose a challenge. But eventually you can judge on 16/05 yourself, the windiness is similar, only gustier on 17/05. No significant precipitation forecasted. Mixed visbility, no whiteout to be expected, and even sunshine possible.
18/05: Weather situation not changing much. Gustiness calming down.
19-21/05: No storm to be expected, but precipitation possible. A retreat to Base Camp nevertheless should be possible. Note that I do not see a favorable and sunny weather window here. 21/05 seems sunny, but this is long time ahead.

