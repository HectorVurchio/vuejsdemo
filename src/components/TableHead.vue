<template>
  <tr>
    <th v-for="item in items" :key="item.id">{{ item }}</th>
  </tr>
</template>
<script>
export default {
  name: "TableHead",
  props: {
    items: { Array, required: true },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
tr {
  height: 40px;
  background: #42b983;
}
th {
  font-weight: bold;
  padding: 8px;
  text-align: left;
}
@media only screen and (max-width: 590px) {
  th {
    padding: 0px;
    text-align: center;
  }
}
</style>
