<template>
  <div class="w-screen h-screen grid place-items-center">
    <form @submit.prevent>
      <h1 class="text-4xl cursor-default hover:text-teal-400">Login Vaccinify</h1>
      <div
        class="grid gap-4 grid-cols-1 place-items-center bg-slate-50 border-teal-500 border-4 p-20 rounded-xl"
      >
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Insert your username"
          name="username"
          class="bg-transparent border-slate-500 border-2 rounded-lg p-2"
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Insert you password"
          name="password"
          class="bg-transparent border-slate-500 border-2 rounded-lg p-2"
        />
        <router-link to="/home">
          <button class="bg-teal-300 text-white w-40 p-2 rounded-lg">Login</button>
        </router-link>
      </div>
    </form>
  </div>
</template>
