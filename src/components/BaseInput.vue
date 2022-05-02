<template>
  <label v-if="label">{{ label }}<span>*</span></label>
  <input v-bind="$attrs" :value="modelValue" :placeholder="label" />
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    label: { type: String, default: "" },
    modelValue: { type: [String, Number], default: "" },
  },
};
</script>
<style scoped>
input {
  height: 26px;
  font-size: 12px;
  border: 1px solid #deeaeb;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
}
label {
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
}
label span:last-child {
  color: red;
}
@media only screen and (min-width: 640px) and (max-width: 870px) {
  input {
    font-size: 10px;
  }
  label {
    font-size: 10px;
  }
}
</style>
