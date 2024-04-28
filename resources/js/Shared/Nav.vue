<template>
  <nav class="mt-6">
    <ul class="list-disc">
      <li>
        <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
      </li>
      <li>
        <NavLink href="/users" 
          :active="$page.component === 'Users'">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink href="/settings" 
          :active="$page.component === 'Settings'">
          Settings
        </NavLink>
      </li>
      <li><Link href="/logout" :data="{ foo: 'bar'}" class="text-blue-500 hover:underline" method="post" as="button">Log out</Link></li>
    </ul>
  </nav>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import NavLink from './NavLink.vue';
export default {
  components: {
    Link,NavLink,
  }
}
</script>

<style>

</style>