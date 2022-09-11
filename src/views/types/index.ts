export interface Coords {
  lat: string
  lon: string
}

export interface WeatherListItem {
  weather: WeatherItem[]
  dt_txt: string
}

export interface WeatherItem {
  id: number
  main: string
  description: string
  icon: string
}
