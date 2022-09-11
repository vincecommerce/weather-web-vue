<template>
  <p class="text-white">
    Page "{{ path }}" not found <br />
    Please go back homepage
    <router-link to="/" class="text-red-500">here</router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      path: this.$route.params.pathMatch[0],
    }
  },
})
</script>
