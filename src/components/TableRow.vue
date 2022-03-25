<template>
  <div class="table-row">
    <div v-for="item in items" :key="item.id">{{ item }}</div>
  </div>
</template>
<script>
export default {
  name: "TableRow",
  props: {
    items: { Array, required: true },
  },
  created() {
    //console.log(typeof this.items);
  },
};
</script>
