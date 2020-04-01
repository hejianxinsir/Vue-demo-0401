<template>
  <ul>
    <li>
      <router-link to="/helloworld">Hello World</router-link>
    </li>
    <li>
      <router-link to="/helloearth">Hello Earth</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style scoped>
li{
  list-style: none;
  margin: 20px;
}
</style>