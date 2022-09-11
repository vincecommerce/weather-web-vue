<template>
  <div class="flex justify-center items-center h-screen">
    <div class="block p-6 rounded-lg shadow-lg bg-white w-96">
      <form @submit.prevent="login()">
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
            placeholder="Enter email"
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
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <button
          type="submit"
          class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getUser } from '@/utils'
import { uuid } from 'vue-uuid'

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const user = await getUser(this.email)
      if (user.length >= 1) {
        if (user[0].password === this.password) {
          localStorage.setItem('token', uuid.v4())
          return this.$router.push('/weather')
        } else {
          alert('Invalid email or password')
        }
      } else {
        alert('Invalid email or password')
      }
    },
  },
})
</script>
