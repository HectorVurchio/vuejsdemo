<template>
  <div class="headbar">
    <h1 @click="changeTitle">{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: "HeadBarTest",
  props: {
    title: { type: String, default: "" },
  },
  methods: {
    changeTitle() {
      this.$emit("changeTitle", "This is a New List");
    },
  },
};
</script>

<style scoped>
.headbar {
  height: 80px;
  background-color: white;
  text-align: left;
  padding-left: 30px;
  border: 1px solid #deeaeb;
  box-sizing: border-box;
}
</style>
