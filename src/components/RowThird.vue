<template>
  <div class="form-row-2">
    <div class="ver-col-1">
      <BaseInput label="Start Stroke:" type="text" id="start-stroke" />
    </div>
    <div class="ver-col-1">
      <BaseInput label="End Stroke:" type="text" id="end-stroke" />
    </div>
  </div>
</template>
<script>
import BaseInput from "./BaseInput.vue";

export default {
  name: "RowThird",
  components: {
    BaseInput,
  },
  props: {},
};
</script>
