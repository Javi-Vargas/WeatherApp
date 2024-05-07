//commented out cuz i hit an API limit on RapidAPI and don't wanna get charged
export const environment = {
    production: false,
    weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com', //this and the 'weather.service.ts' files took an annoying amount of format debugging to get the url right and make it dynamic.
    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'open-weather13.p.rapidapi.com',
    XRapidAPIKeyHearderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: 'dd2acea9dfmsh96742d839488ac3p166fc4jsn6802642a06bf',

    weatherApiNewUrl: '',
    XTmrwdAPIHostHeaderName: 'X-TmrwAPI-Host',
    XTmrwAPIHostHeaderValue: 'https://api.tomorrow.io/v4/',
    XTmrwAPIKeyHearderName: 'X-TmrwAPI-Key',
    XTmrwAPIKeyHeaderValue: '5EV9LrljZe1cF49ZkTQOifTccS2gmtZH',

    //https://open-weather13.p.rapidapi.com/city/Winter%20Park/EN
    // Other environment-specific variables
  };
  