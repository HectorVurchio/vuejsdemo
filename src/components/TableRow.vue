<template>
  <tr v-for="item in items" :key="item.id">
    <!--<td>{{ item.prefix }}</td>
    <td>{{ item.machine_name }}</td>
    <td>{{ item.test_number }}</td>
    <td>{{ item.start_phase }}</td>
    <td>{{ item.end_phase }}</td>
    <td>{{ item.start_stroke }}</td>
    <td>{{ item.end_stroke }}</td>
    <td>{{ item.bioethanol }}</td>-->
    <td v-for="element in aaa(item)" :key="element.id">
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
  data() {
    return {
      rowValues: null,
    };
  },
  created() {
    //console.log(this.items);
    //console.log(this.mustBe);
    this.rows = this.mustBe;
    //console.log(this.rowValues);
  },
  computed: {
    elements: {
      set(val) {
        this.rowValues = "";
        //if (this.mustBe.includes(val)) {
        //  this.rowValues = val;
        //}
        console.log(val);
      },
      get() {
        return this.rowValues;
      },
    },
  },
  methods: {
    aaa(val) {
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
