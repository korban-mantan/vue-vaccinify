<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-teal-400 top-0 sticky z-50 w-full text-white">
    <div class="container flex items-center justify-between gap-5 mx-5">
      <RouterLink to="/home">
      <div class="flex items-center">
        <img alt="Vue logo" class="logo" src="/favicon.ico" width="60" height="60" />
        <h2 class="text-3xl">Vaccinify</h2>
      </div>
    </RouterLink>
      <div class="flex gap-2">
        <span>Username Here</span>
        <RouterLink to="/">Logout</RouterLink>
      </div>
    </div>
  </nav>

</template>