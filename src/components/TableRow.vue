<template>
  <tr v-for="item in items" :key="item.id">
    <td @click="rowClk" v-for="element in elements(item)" :key="element.id">
      {{ element }}
    </td>
    <input :id="item.id" type="hidden" :value="hide" />
  </tr>
</template>
<script>
export default {
  props: {
    items: { Array, required: true },
    mustBe: { Array, required: true },
  },
  data() {
    return {
      hide: null,
      vals: null,
    };
  },
  methods: {
    elements(val) {
      const arr = [];
      const obj = {};
      for (const [key, value] of Object.entries(val)) {
        if (this.mustBe.includes(key)) {
          arr.push(value);
        } else {
          obj[`${key}`] = value;
        }
      }
      this.hide = JSON.stringify(obj);
      return arr;
    },
    rowClk(event) {
      const element = event.target;
      const parent = element.parentElement;
      this.vals = parent.lastChild.value;
      this.$store.commit("change_uploadval", parent.lastChild.value);
      this.$router.push({ name: "ExelFile", params: { file: "files" } });
    },
  },
};
</script>
<style scoped>
tr {
  height: 40px;
  cursor: pointer;
}
tr:nth-of-type(odd) {
  background: #42b983;
}
td {
  padding: 8px;
  text-align: left;
}
</style>
