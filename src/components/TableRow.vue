<template>
  <tr v-for="item in items" :key="item.id">
    <td v-for="td in item" :key="td.id">{{ td }}</td>
  </tr>
</template>
<script>
export default {
  props: {
    items: { Array, required: true },
  },
  created() {
    console.log(this.items);
  },
};
</script>
