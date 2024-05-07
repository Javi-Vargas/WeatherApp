// export interface WeatherData {
//     coord: Coord
//     weather: Weather[]
//     base: string
//     main: Main
//     visibility: number
//     wind: Wind
//     clouds: Clouds
//     dt: number
//     sys: Sys
//     timezone: number
//     id: number
//     name: string
//     cod: number
//   }
  
//   export interface Coord {
//     lon: number
//     lat: number
//   }
  
//   export interface Weather {
//     id: number
//     main: string
//     description: string
//     icon: string
//   }
  
//   export interface Main {
//     temp: number
//     feels_like: number
//     temp_min: number
//     temp_max: number
//     pressure: number
//     humidity: number
//   }
  
//   export interface Wind {
//     speed: number
//     deg: number
//   }
  
//   export interface Clouds {
//     all: number
//   }
  
//   export interface Sys {
//     type: number
//     id: number
//     country: string
//     sunrise: number
//     sunset: number
//   }
  

export interface WeatherData {
  timelines: Timelines
  location: Location
}

export interface Timelines {
  daily: Daily[]
}

export interface Daily {
  time: string
  values: Values
}

export interface Values {
  cloudBaseAvg: number
  cloudBaseMax: number
  cloudBaseMin: number
  cloudCeilingAvg: number
  cloudCeilingMax: number
  cloudCeilingMin: number
  cloudCoverAvg: number
  cloudCoverMax: number
  cloudCoverMin: number
  dewPointAvg: number
  dewPointMax: number
  dewPointMin: number
  evapotranspirationAvg: number
  evapotranspirationMax: number
  evapotranspirationMin: number
  evapotranspirationSum: number
  freezingRainIntensityAvg: number
  freezingRainIntensityMax: number
  freezingRainIntensityMin: number
  humidityAvg: number
  humidityMax: number
  humidityMin: number
  iceAccumulationAvg: number
  iceAccumulationLweAvg: number
  iceAccumulationLweMax: number
  iceAccumulationLweMin: number
  iceAccumulationLweSum: number
  iceAccumulationMax: number
  iceAccumulationMin: number
  iceAccumulationSum: number
  moonriseTime: string
  moonsetTime?: string
  precipitationProbabilityAvg: number
  precipitationProbabilityMax: number
  precipitationProbabilityMin: number
  pressureSurfaceLevelAvg: number
  pressureSurfaceLevelMax: number
  pressureSurfaceLevelMin: number
  rainAccumulationAvg: number
  rainAccumulationLweAvg: number
  rainAccumulationLweMax: number
  rainAccumulationLweMin: number
  rainAccumulationMax: number
  rainAccumulationMin: number
  rainAccumulationSum: number
  rainIntensityAvg: number
  rainIntensityMax: number
  rainIntensityMin: number
  sleetAccumulationAvg: number
  sleetAccumulationLweAvg: number
  sleetAccumulationLweMax: number
  sleetAccumulationLweMin: number
  sleetAccumulationLweSum: number
  sleetAccumulationMax: number
  sleetAccumulationMin: number
  sleetIntensityAvg: number
  sleetIntensityMax: number
  sleetIntensityMin: number
  snowAccumulationAvg: number
  snowAccumulationLweAvg: number
  snowAccumulationLweMax: number
  snowAccumulationLweMin: number
  snowAccumulationLweSum: number
  snowAccumulationMax: number
  snowAccumulationMin: number
  snowAccumulationSum: number
  snowDepthAvg?: number
  snowDepthMax?: number
  snowDepthMin?: number
  snowDepthSum?: number
  snowIntensityAvg: number
  snowIntensityMax: number
  snowIntensityMin: number
  sunriseTime: string
  sunsetTime: string
  temperatureApparentAvg: number
  temperatureApparentMax: number
  temperatureApparentMin: number
  temperatureAvg: number
  temperatureMax: number
  temperatureMin: number
  uvHealthConcernAvg?: number
  uvHealthConcernMax?: number
  uvHealthConcernMin?: number
  uvIndexAvg?: number
  uvIndexMax?: number
  uvIndexMin?: number
  visibilityAvg: number
  visibilityMax: number
  visibilityMin: number
  weatherCodeMax: number
  weatherCodeMin: number
  windDirectionAvg: number
  windGustAvg: number
  windGustMax: number
  windGustMin: number
  windSpeedAvg: number
  windSpeedMax: number
  windSpeedMin: number
}

export interface Location {
  lat: number
  lon: number
  name: string
  type: string
}
