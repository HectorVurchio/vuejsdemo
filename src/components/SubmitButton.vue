<template>
  <div class="form-row-4">
    <div class="hor-col-1">
      <button @click="submitFiles()">Submit</button>
    </div>
  </div>
</template>
<script>
import DemoService from "@/services/DemoService.js";

export default {
  name: "SubmitButton",
  data() {
    return {
      files: "",
    };
  },
  methods: {
    submitFiles() {
      //console.log(this.$store.state.files);
      const formData = new FormData();
      this.$store.state.files.forEach((elm, ind) => {
        //console.log(ind, elm);
        formData.append(`files[${ind}]`, elm);
      });
      DemoService.postSendung(formData)
        .then(() => {
          console.log("SUCCESS!!");
        })
        .catch(() => {
          console.log("FAILURE!!");
        });
    },
  },
};
</script>
