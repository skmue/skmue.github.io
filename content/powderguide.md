+++
title = 'PowderGuide.com weather forecasts'
+++

# Short History

In summer of 2023 [croox.com](https://croox.com/) and me started developing a weather service, dedicated to winter mountain activities, in particular skitouring and freeride, and it is operational ever since the release of its first version in December 2023 on [powderguide.com](map.powderguide.com). We process and visualize the ICON numerical weather forecasts run by the german weather service [DWD](https://www.dwd.de/EN/research/weatherforecasting/num_modelling/01_num_weather_prediction_modells/icon_description.html). In its third version we are presenting these forecasts on a three-dimensional map and [in this article the present PG-ICON-weather v3.0 in PG-Map is summarized](https://powderguide.com/en/magazine/news/the-new-powderguide-map-is-live). 
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


# Milestones:

12/2023: Release [PG-ICON-Weather v1.0](https://powderguide.com/en/magazine/interviews/interview-sebastian-zum-neuen-powderguide-wetter)
- automatic download and visualization of ICON-D2 and ICON-EU for the alps
- production of standard forecast variables new snow amount, snow depth, sunshine hours, gusts
- presentation of snow age, snow density und snow temperature
- probabilistic weather forecasts using ensemble models ICON-D2-EPS and ICON-EU-EPS
- masks for indicating of unfavorable snow conditions

03/2024: Update [PG-ICON-Weather v1.1](https://powderguide.com/en/magazine/news/extension-pg-icon-weather-forecast-maps)
- forecasts extended for regions (Scandinavia, Caucasus, Pyrenees, Balkan)
- search function

12/2024: Release [PG-ICON-Weather v2.4.0](https://powderguide.com/en/magazine/wetterblog/weatherblog-15-202425-the-new-powderguide-weather-v240)

- new global regions: north America, Andes, Cashmere, Japan
- extended forecasting period: 7.5 days
- new forecast variables: cloud cover, near-surface relative humidity, freezing line
- new snow depth models: SNOWGRID for Austria, EXOLABS globally
- Probe for the identifications of specific values

01/2026: Release [PG-ICON-Weather v3.0: PG-Map](https://powderguide.com/en/magazine/news/the-new-powderguide-map-is-live)

- parallelization and on-demand computation: 3-hourly temporal resolution
- three-dimensional map
- [PowderGrams](https://powderguide.com/en/magazine/news/powderguide-map-tutorial-powdergram)
- implementation of new snow density and new snow height
- new forecasting variables: surface pressure, 500hPa geopotential, (500hPa-1000hPa) geopotential thickness, orography


05/2026: global PowderGrams for expedition meteorology

- implementation of the global ICON und WRF-HRRR-AK forecasts in PowderGrams


# Projects: 
### avalanche risk maps

- Michael Neuhauser and Chris d’Amboise
- co-development of a novel dataset of avalanche release and runout zones
    -using FlowPy
    -specialised for the demands of freeriders und ski alpinists
- slope steepness and exposition

### Implementation operationeller Schneedeckenmodellierung

- Prognose des Schneedeckenaufbaus für ausgewählte Berge und unterschiedliche Expositionen und Höhenlagen
    -unter Verwendung von SNOWPACK and AWSOME
    -unter Fokus auf Schneequalität und Schneezustandformen
    -potentiell auch geeignet zur Einschätzung des Lawinenrisikos
<!-- Anselm Köhler
Michael
Leo -->


### Implementation of observations through [Alpinemeteo.com](www.Alpinemeteo.com)
