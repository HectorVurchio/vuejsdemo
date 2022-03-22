<template>
  <div class="form-row-3">
    <div class="ver-col-3">
      <label v-if="label" :id="`${fileid}-l`">{{ label }}<span>*</span></label>
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
  data() {
    return {
      fileExt: "xlsx",
      default_color: "#2c3e50",
    };
  },
  methods: {
    handleClick() {
      const inpfile = document.getElementById(this.fileid);
      inpfile.showPicker();
    },
    handleChange(event) {
      const element = event.target;
      const elmid = element.id;
      const labelid = `${elmid}-l`;
      const label = document.getElementById(`${labelid}`);
      const aaid = `${elmid}-p`;
      const aa = document.getElementById(`${aaid}`);
      const files = element.files;
      const fileName = files[0].name;
      const extension = fileName.split(".").pop();
      if (extension.toLowerCase() == this.fileExt) {
        aa.textContent = files[0].name;
        aa.style.color = this.default_color;
        label.style.color = this.default_color;
      } else {
        aa.style.color = "red";
        label.style.color = "red";
        alert(`The File Extension must be of type .${this.fileExt}`);
        element.removeAttribute("type");
        element.setAttribute("type", "file");
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
