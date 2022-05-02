<template>
  <div class="headbar">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "HeadBar",
  props: {
    msg: { type: String, default: "" },
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-top: 22px;
}
.headbar {
  height: 80px;
  background-color: white;
  text-align: left;
  padding-left: 30px;
  border: 1px solid #deeaeb;
  box-sizing: border-box;
}
</style>
