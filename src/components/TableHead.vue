<template>
  <tr class="table-row">
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
<style></style>
