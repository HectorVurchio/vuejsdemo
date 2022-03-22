<template>
  <div class="form-row-1">
    <div class="hor-col-1">
      <label
        ><span>Test Name</span>(Prefix / Machine Name / Test)<span
          >*</span
        ></label
      >
    </div>
    <div class="hor-col-2">
      <BaseSelect id="prefix" :options="categories" />
      <input type="text" id="macnam" value="" placeholder="Machine Name" />
      <input type="text" id="Testnumb" value="" placeholder="Test #" />
    </div>
  </div>
</template>
<script>
import BaseSelect from "./BaseSelect.vue";

export default {
  name: "RowFirst",
  components: {
    BaseSelect,
  },
  props: {},
  data() {
    return {
      categories: ["LDT", "GAS", "EMIT", "HOU", "EDU", "COM"],
    };
  },
};
</script>
