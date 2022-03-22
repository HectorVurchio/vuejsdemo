<template>
  <div class="form-row-4">
    <div class="hor-col-1">
      <button @click="submitFiles">Submit</button>
    </div>
  </div>
</template>
<script>
//import DemoService from "@/services/DemoService.js";

export default {
  name: "SubmitButton",
  data() {
    return {
      files: "",
    };
  },
  methods: {
    submitFiles(event) {
      const form = event.target.form;
      const elements = form.elements;
      for (let i = 0; i < elements.length; i++) {
        if (
          elements[i].nodeName.toLowerCase() == "input" &&
          elements[i].type.toLowerCase() == "file"
        ) {
          console.log(elements[i].files[0]);
        }
      }
      /*


      const formData = new FormData();
      this.$store.state.files.forEach((elm, ind) => {
        formData.append(`files[${ind}]`, elm);
      });
      DemoService.postSendung(formData)
        .then(() => {
          console.log("SUCCESS!!");
        })
        .catch(() => {
          console.log("FAILURE!!");
        });
        */
    },
  },
};
</script>
