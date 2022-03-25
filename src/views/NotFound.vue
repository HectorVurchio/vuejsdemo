<template>
  <h1>Oops!</h1>
  <h3>The page {{ resource }} you're llokingfor is not here.</h3>
  <router-link :to="{ name: 'home' }">Back to the home page</router-link>
</template>
<script>
export default {
  data() {
    return { resource: "" };
  },
  resource: {
    type: String,
    required: true,
    default: "page",
  },
};
</script>
