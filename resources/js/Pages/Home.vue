<template>
  <h1>Hello World {{ name }}</h1>
  <p>In this series we will use following frameworks</p>
  <ul>
    <li v-for="framework in frameworks" v-text="framework" :key="framework"></li>
  </ul>
</template>

<script>
export default {
  props: {
    name: String,
    frameworks: Array,
  }
}
</script>

<style>

</style>