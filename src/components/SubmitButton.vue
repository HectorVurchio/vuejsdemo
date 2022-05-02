<template>
  <div class="form-row-4">
    <div class="hor-col-1">
      <button @click="submitFiles" id="button" value="submit">Submit</button>
    </div>
  </div>
</template>
<script>
import DemoService from "@/services/DemoService.js";
import FormService from "@/services/FormService.js";
export default {
  name: "SubmitButton",
  data() {
    return {
      files: [],
      fields: {},
      aaids: [],
      play: true,
    };
  },
  methods: {
    submitFiles(event) {
      const fs = FormService.chkEmptyElm(event.target);
      this.files = fs[0];
      this.fields = fs[1];
      this.aaids = fs[2];
      this.play = fs[3];
      const form = event.target.form;
      if (this.play) {
        const formData = new FormData();
        this.files.forEach((elm, ind) => {
          formData.append(`files[${ind}]`, elm);
        });
        formData.append("fields", JSON.stringify(this.fields));
        DemoService.postSendung(formData)
          .then((resp) => {
            console.log(resp.data);
            this.$store.commit(
              "change_flash_yellow",
              "Data Successfully Loaded... "
            );
            this.aaids.forEach((i) => {
              document.getElementById(`${i}`).textContent = "No File Chosen";
            });
            form.reset();
            setTimeout(() => {
              this.$store.commit("change_flash_yellow", "");
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            this.$store.commit(
              "change_flash_red",
              "Data Unsuccessfully Loaded..."
            );
            setTimeout(() => {
              this.$store.commit("change_flash_red", "");
            }, 3000);
          });
      }
    },
  },
};
</script>
<style scoped>
.form-row-4 {
  text-align: center;
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
  border: 2px solid #deeaeb;
  border-radius: 8px;
  box-sizing: border-box 0px;
  cursor: pointer;
}
.form-row-4 .hor-col-1 button:hover {
  background-color: #a5c2c4;
}
@media only screen and (min-width: 640px) and (max-width: 870px) {
  .hor-col-1 label {
    font-size: 10px;
  }
  .hor-col-1 label :first-child {
    font-size: 12px;
  }
}
@media only screen and (min-width: 430px) and (max-width: 639px) {
  .form-row-4 {
    margin-top: 30px;
  }
}
@media only screen and (min-width: 340px) and (max-width: 429px) {
  .form-row-4 {
    margin-top: 30px;
  }
}
</style>
