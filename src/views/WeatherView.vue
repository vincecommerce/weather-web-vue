<template>
  <div class="flex m-10">
    <input
      type="text"
      class="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="nameInput"
      aria-describedby="nameHelp"
      placeholder="Enter your name"
      v-model="city"
    />
    <button
      type="submit"
      class="ml-6 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      @click="weather()"
    >
      search
    </button>
  </div>
  <div class="flex flex-col w-4/5 mx-10">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden rounded-lg">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  #
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Main
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Description
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Icon
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                v-for="item in weatherItem"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ item.weather[0].id }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ item.weather[0].main }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ item.weather[0].description }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  <img
                    v-bind:src="getImageLink(item.weather[0].icon)"
                    alt="no image"
                    width="50"
                    height="50"
                  />
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ getDate(item.dt_txt) }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ getTimestamp(item.dt_txt) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <button
    type="submit"
    class="ml-10 mt-10 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    @click="logout()"
  >
    logout
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getCoords, getWeather } from '../utils'
import type { WeatherListItem } from './types'

export default defineComponent({
  data() {
    const weatherItem: WeatherListItem[] = []
    return {
      city: '',
      weatherItem,
    }
  },
  methods: {
    getImageLink(icon: string): string {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`
    },
    getDate(date: string): string {
      return date.slice(0, date.indexOf(' '))
    },
    getTimestamp(date: string): string {
      return date.slice(date.indexOf(' ') + 1, date.length)
    },
    logout() {
      localStorage.removeItem('token')
      return this.$router.push('/')
    },
    async weather() {
      const coords = await getCoords(this.city)
      if (coords !== undefined) {
        const items = await getWeather(coords.lat, coords.lon)
        if (items !== undefined) {
          this.weatherItem = items
        } else {
          alert('Something has gon wrong')
        }
      } else {
        alert('City not found')
      }
    },
  },
})
</script>
