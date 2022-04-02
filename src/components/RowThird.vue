<template>
  <div class="form-row-2">
    <div class="ver-col-1">
      <BaseInput
        label="Start Stroke:"
        type="text"
        id="start-stroke"
        maxlength="20"
      />
    </div>
    <div class="ver-col-1">
      <BaseInput
        label="End Stroke:"
        type="text"
        id="end-stroke"
        maxlength="20"
      />
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
<style scoped>
.form-row-2 {
  display: flex;
  margin-bottom: 16px;
}
.ver-col-1 {
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-left: 2%;
}
@media only screen and (min-width: 640px) and (max-width: 870px) {
  .ver-col-1 {
    width: 43%;
    margin-left: 2%;
  }
}
</style>
