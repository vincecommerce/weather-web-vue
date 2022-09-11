import type { Coords, WeatherListItem } from '@/views/types'
import axios from 'axios'

export const userExists = async (email: string): Promise<boolean> => {
  const user = await axios.get(`http://localhost:3000/api/users?email=${email}`)
  return user.data.length === 1
}

export const getUser = async (email: string): Promise<any> => {
  const user = await axios.get(`http://localhost:3000/api/users?email=${email}`)
  return user.data
}

export const getCoords = async (city: string): Promise<Coords> => {
  const coords = await axios.get(
    `https://nominatim.openstreetmap.org/search?city=${city}&format=json`,
  )
  return coords.data[0]
}

export const getWeather = async (
  lat: string,
  lon: string,
): Promise<WeatherListItem[]> => {
  const weatherList = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=24&appid=a8e73af3df606ac20b737414f7778ae3`,
  )
  return weatherList.data.list
}
