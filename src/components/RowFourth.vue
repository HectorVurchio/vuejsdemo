<template>
  <div class="form-row-1">
    <div class="hor-col-1">
      <label><span>Hydrous bioethanol E90W10 LHV:</span><span>*</span></label>
    </div>
    <div class="hor-col-2">
      <input type="text" id="hydrous-bioethanol" maxlength="12" />
      <label for="hydrous-bioethanol">J/mg</label>
    </div>
  </div>
  <div class="form-row-1">
    <div class="hor-col-1">
      <label><span>Notes:</span><span></span></label>
    </div>
    <div class="hor-col-2">
      <textarea id="notes" maxlength="250"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "RowFour",
  props: {},
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
  font-family: "Roboto";
}
.hor-col-2 {
  display: flex;
}
.hor-col-2 label {
  font-family: "Roboto";
  font-size: 12px;
  margin-left: 14px;
  padding-top: 4px;
}
.hor-col-2 > input,
select {
  width: 32%;
  margin-left: 2%;
  height: 26px;
  font-size: 12px;
  font-family: "Roboto";
  border: 1px solid #deeaeb;
  border-radius: 2px;
  box-sizing: border-box;
}
.hor-col-2 textarea {
  width: 96%;
  margin-left: 2%;
  height: 60px;
  font-size: 14px;
  font-family: "Roboto";
  border: 1px solid #deeaeb;
  border-radius: 6px;
  box-sizing: border-box;
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
  .hor-col-2 textarea {
    width: 88%;
    font-size: 12px;
  }
}
</style>
