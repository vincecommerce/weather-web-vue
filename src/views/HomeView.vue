<template>
  <div class="flex justify-center mt-24">
    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">Weather web</h5>
        <p class="text-gray-700 text-base mb-4">
          Simple app to get the weather from a city using OpenWeather api
        </p>
        <div class="flex justify-between">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out"
            @click.prevent="loginRedirect()"
          >
            login
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out"
            @click.prevent="signupRedirect()"
          >
            sign up
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out"
            @click.prevent="weatherRedirect()"
          >
            weather
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    loginRedirect() {
      return this.$router.push('/login')
    },
    signupRedirect() {
      return this.$router.push('/register')
    },
    weatherRedirect() {
      return this.$router.push('/weather')
    },
  },
})
</script>
