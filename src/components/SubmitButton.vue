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
