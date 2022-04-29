<template>
  <tr @click="rowClk" v-for="item in items" :key="item.id">
    <td v-for="element in elements(item)" :key="element.id">
      {{ element }}
    </td>
    <input :id="item.id" type="hidden" :value="getHide(item)" />
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
      vals: null,
    };
  },
  methods: {
    elements(val) {
      const arr = [];
      for (const [key, value] of Object.entries(val)) {
        if (this.mustBe.includes(key)) {
          arr.push(value);
        }
      }
      return arr;
    },
    rowClk(event) {
      const element = event.target;
      const parent = element.parentElement;
      this.vals = parent.lastChild.value;
      this.$store.commit("change_uploadval", parent.lastChild.value);
      this.$router.push({ name: "ExelFile", params: { file: "files" } });
    },
    getHide(val) {
      const obj = {};
      for (const [key, value] of Object.entries(val)) {
        if (!this.mustBe.includes(key)) {
          obj[key] = value;
        }
      }
      return JSON.stringify(obj);
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
@media only screen and (max-width: 590px) {
  td {
    padding: 0px;
    text-align: center;
  }
}
</style>
