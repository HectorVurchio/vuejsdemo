<template>
  <div id="yellowMessage" v-if="this.$store.state.yellowMessage">
    {{ this.$store.state.yellowMessage }}
  </div>
  <div id="redMessage" v-if="this.$store.state.redMessage">
    {{ this.$store.state.redMessage }}
  </div>
</template>
<script>
export default {
  name: "FlashMessage",
};
</script>
<style scoped>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#yellowMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

@keyframes redfade {
  from {
    background: red;
  }
  to {
    background: transparent;
  }
}
#redMessage {
  animation-name: redfade;
  animation-duration: 3s;
  color: yellow;
}
</style>
