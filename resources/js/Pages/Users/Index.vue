<template>

  <Head title="Users" />
  <div class="flex justify-between mb-6">
    <div class="flex items-center">
      <h1 class="text-3xl">Users</h1>

      <Link href="/users/create" class="text-blue-500 ml-4">New User</Link>
    </div>

    <input v-model="search" type="text" placeholder="Search..." class="border px-4 rounded-lg">
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            User name
          </th>
          <th scope="col" class="px-6 py-3">
            Email
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.data" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.name }}
          </th>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            <Link :href="`/users/${user.id}/edit`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Paginator -->
  <Pagination :links="users.links"></Pagination>
</template>

<script setup>
import Pagination from '../../Shared/Pagination.vue';
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3'

let props = defineProps({
  users: Object,
  filters: Object
});

let search = ref(props.filters.search);

watch(search, value => {
  router.get('/users', { search: value }, {
    preserveState: true,
    replace: true
  });
});
</script>

<style></style>
