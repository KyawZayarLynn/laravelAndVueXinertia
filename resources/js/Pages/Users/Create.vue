<template>

  <Head title="Create User" />
  <h1 class="text-3xl mb-6">Create New User</h1>

  <form @submit.prevent="submit" class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input
          v-model="form.name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="name" type="text" placeholder="Jane" name="name" required>
          <div v-if="errors.name" v-text="errors.name" class="text-red-500 text-xs mt-1">
          </div>
      </div>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="form.email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email" type="email" placeholder="samthin@example.com" name="email" required>
          <div v-if="errors.email" v-text="errors.email" class="text-red-500 text-xs mt-1">
          </div>
      </div>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          Password
        </label>
        <input
          v-model="form.password"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="password" type="password" placeholder="*******" name="password" required>
          <div v-if="errors.password" v-text="errors.password" class="text-red-500 text-xs mt-1">
          </div>
      </div>
    </div>
    <div class="mb-6">
      <button
        type="submit"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import { Inertia } from '@inertiajs/inertia'

defineProps({
  errors:Object
});

let form = reactive({
  name: '',
  email: '',
  password: ''
});
let submit = () => {
  Inertia.post('/users' , form);
};
</script>

<style></style>