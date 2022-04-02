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
  font-size: 14px;
  border: 1px solid #deeaeb;
  border-radius: 2px;
  box-sizing: border-box;
}
label span:last-child {
  color: red;
}
@media only screen and (min-width: 640px) and (max-width: 870px) {
  input {
    font-size: 12px;
  }
}
</style>
