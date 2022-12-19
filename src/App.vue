<template>
  <FlashMessage />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'form' }">Form</router-link> |
    <router-link
      :to="{
        name: 'uploads',
        params: { id: 'uploads' },
        query: { _limit: 2, _page: 1 },
      }"
      >Uploads</router-link
    >
    |
    <!--<router-link
      :to="{
        name: 'list',
        params: { id: 'events' },
        query: { _limit: 2, _page: 1 },
      }"
      >List</router-link
    >
    |-->
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <router-view />
</template>
<script>
import FlashMessage from "@/views/FlashMessage.vue";
export default {
  components: {
    FlashMessage,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
