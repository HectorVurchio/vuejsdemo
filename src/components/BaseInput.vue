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
