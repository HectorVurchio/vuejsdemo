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
      <input
        type="text"
        id="macnam"
        value=""
        placeholder="Machine Name"
        maxlength="20"
      />
      <input
        type="text"
        id="Testnumb"
        value=""
        placeholder="Test #"
        maxlength="10"
      />
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
<style scoped>
.form-row-1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.hor-col-1 {
  margin-bottom: 6px;
}
.hor-col-1 label {
  font-family: "Roboto";
  font-size: 12px;
}

.hor-col-1 label :first-child {
  margin-right: 8px;
  margin-left: 2%;
  font-weight: bold;
  font-size: 14px;
}
.form-row-4 .hor-col-1 button {
  height: 40px;
  width: 200px;
  font-size: 20px;
  border: 1px solid #deeaeb;
  border-radius: 8px;
  box-sizing: border-box 0px;
  cursor: pointer;
}
.form-row-4 .hor-col-1 button:hover {
  background-color: #a5c2c4;
}
.hor-col-2 {
  display: flex;
}

.hor-col-2 > input,
select {
  width: 32%;
  margin-left: 2%;
  height: 26px;
  font-size: 14px;
  border: 1px solid #deeaeb;
  border-radius: 2px;
  box-sizing: border-box;
}
.hor-col-2 textarea {
  width: 96%;
  margin-left: 2%;
  height: 60px;
  font-size: 16px;
  border: 1px solid #deeaeb;
  border-radius: 3px;
  box-sizing: border-box;
}
label span:last-child {
  color: red;
}
@media only screen and (min-width: 640px) and (max-width: 870px) {
  .hor-col-1 label {
    font-size: 10px;
  }
  .hor-col-1 label :first-child {
    font-size: 12px;
  }
  .hor-col-2 > input,
  select {
    width: 28%;
    height: 22px;
    font-size: 12px;
  }
}
.hor-col-2 textarea {
  width: 88%;
  font-size: 12px;
}
</style>
