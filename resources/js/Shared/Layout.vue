<template>
  <section class="p-6 bg-gray-200">
    <header class="flex justify-between">
      <div class="flex items-center">
        <h1 class="font-bold text-lg">
          My App
        </h1>
        <p class="text-sm ml-4">Welcome Back, {{ username }}!</p>
      </div>
      <Nav/>
    </header>
</section>
  <section class="p-6 ">
    <div class="max-w-3xl mx-auto">
      <iframe width="400" height="200" src="https://www.youtube.com/embed/7-VEPjqchak?list=RDGMEMP-96bLtob-xyvCobnxVfywVM7-VEPjqchak" title="The Weeknd, Playboi Carti &amp; Madonna - Popular (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <slot/>
    </div>
  </section>
</template>

<script>
import Nav from './Nav'

export default {
  components: { Nav },
  computed: {
    username() {
      return this.$page.props.auth.user.username;
    }
  }
}
</script>

<style>

</style>