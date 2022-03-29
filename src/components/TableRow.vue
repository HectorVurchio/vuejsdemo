<template>
  <tr v-for="item in items" :key="item.id">
    <td v-for="element in elements(item)" :key="element.id">
      {{ element }}
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    items: { Array, required: true },
    mustBe: { Array, required: true },
  },
  methods: {
    elements(val) {
      const bbb = [];
      for (const [key, value] of Object.entries(val)) {
        if (this.mustBe.includes(key)) {
          bbb.push(value);
        }
      }
      return bbb;
    },
  },
};
</script>
<style scoped>
tr {
  height: 40px;
}
tr:nth-of-type(odd) {
  background: #42b983;
}
td {
  padding: 8px;
  text-align: left;
}
</style>
