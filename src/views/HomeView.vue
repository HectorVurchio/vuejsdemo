<template>
  <div class="home">
    <img id="main" alt="../assets/logo.png" />
    <PruebaDos msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import PruebaDos from "@/components/PruebaDos.vue";

export default {
  name: "HomeView",
  components: {
    PruebaDos,
  },
};
</script>

<style>
@media (min-width: 640px) {
  #main {
    content: url("../assets/Engine600.jpg");
  }
}
@media screen and (min-width: 400px) and (max-width: 639px) {
  #main {
    content: url("../assets/Engine360.jpg");
  }
}
@media screen and (min-width: 200px) and (max-width: 399px) {
  #main {
    content: url("../assets/Engine180.jpg");
  }
}
</style>
