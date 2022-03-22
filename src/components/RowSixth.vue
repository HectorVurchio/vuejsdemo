<template>
  <div class="form-row-3">
    <div class="ver-col-3">
      <label v-if="label">{{ label }}<span>*</span></label>
      <div class="btn-img-1" @click="handleClick()">
        <img class="butn-img-1" src="@/assets/selfil.svg" />
        <a href="#">Select&nbsp;File</a>
      </div>
    </div>
    <div class="file-selected"><p :id="`${fileid}-p`">No File Chosen</p></div>
    <input
      type="file"
      class="uploadfiles"
      :id="fileid"
      accept=".xlsx"
      @change="handleChange"
      style="display: none; width: 1px"
    />
    <!--<input type="button" :id="`${fileid}-b`" value="read" @click="readFile" />-->
  </div>
</template>
<script>
export default {
  name: "RowSixth",
  props: {
    label: { type: String, default: "" },
    fileid: { type: String },
  },
  methods: {
    handleClick() {
      const inpfile = document.getElementById(this.fileid);
      inpfile.showPicker();
    },
    handleChange(event) {
      const elm = event.target;
      const aa = document.getElementById(`${elm.id}-p`);
      const files = elm.files;
      const fileName = files[0].name;
      const extension = fileName.split(".").pop();
      if (extension.toLowerCase() == "xlsx") {
        aa.textContent = files[0].name;
      } else {
        alert("The File Extension must be of type .xlsx");
        elm.removeAttribute("type");
        elm.setAttribute("type", "file");
      }
      /* readFile(event) {
      const elm = event.target;
      const fs = document.getElementById(`${elm.id.split("-")[0]}`);
      const file = fs.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (evt) {
        console.log(evt.target.result);
      };
      reader.onerror = function (evt) {
        console.log(evt);
        console.log("error reading file");
      };*/
    },
  },
};
</script>
