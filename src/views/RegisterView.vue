<template>
  <div class="flex justify-center items-center h-screen">
    <div class="block p-6 rounded-lg shadow-lg bg-white w-96">
      <form @submit.prevent="register()">
        <div class="form-group mb-6">
          <label
            for="nameInput"
            class="form-label inline-block mb-2 text-gray-700"
            >Name</label
          >
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="nameInput"
            aria-describedby="nameHelp"
            placeholder="Enter your name"
            v-model="name"
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="surnameInput"
            class="form-label inline-block mb-2 text-gray-700"
            >Surname</label
          >
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="surnameInput"
            aria-describedby="surnameHelp"
            placeholder="Enter your surname"
            v-model="surname"
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="emailInput"
            class="form-label inline-block mb-2 text-gray-700"
            >Email address</label
          >
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="passwordInput"
            class="form-label inline-block mb-2 text-gray-700"
            >Password</label
          >
          <input
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="passwordInput"
            placeholder="Enter a password"
            v-model="password"
            required
          />
        </div>
        <button
          type="submit"
          class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userExists } from '../utils'
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      const pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
      const userRegistered = await userExists(this.email)
      if (pattern.test(this.email) && !userRegistered) {
        if (this.password.length >= 5) {
          await axios.post('http://localhost:3000/api/users', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
          })
          return this.$router.push('/login')
        } else {
          alert('Invalid password length')
        }
      } else {
        alert('Invalid email')
      }
    },
  },
})
</script>
