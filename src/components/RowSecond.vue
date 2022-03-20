<template>
  <div class="form-row-2">
    <div class="ver-col-1">
      <BaseInput label="Start Phase:" type="text" id="start-phase" />
    </div>
    <div class="ver-col-1">
      <BaseInput label="End Phase:" type="text" id="end-phase" />
    </div>
  </div>
</template>
<script>
import BaseInput from "./BaseInput.vue";

export default {
  name: "RowFirst",
  components: {
    BaseInput,
  },
  props: {},
};
</script>
