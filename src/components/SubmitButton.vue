<template>
  <div class="form-row-4">
    <div class="hor-col-1">
      <button @click="submitFiles" id="button" value="submit">Submit</button>
    </div>
  </div>
</template>
<script>
import DemoService from "@/services/DemoService.js";

export default {
  name: "SubmitButton",
  data() {
    return {
      files: [],
      fields: {},
      fieldBC: "#deeaeb",
      aaids: [],
    };
  },
  methods: {
    submitFiles(event) {
      const form = event.target.form;
      const elements = form.elements;
      let play = true;
      /*console.log(elements);*/
      for (let i = 0; i < elements.length; i++) {
        if (
          elements[i].nodeName.toLowerCase() == "input" &&
          elements[i].type.toLowerCase() == "file"
        ) {
          //loading of input files
          const aaid = `${elements[i].id}-p`;
          if (elements[i].files[0] != undefined) {
            this.files.push(elements[i].files[0]);
            this.aaids.push(aaid);
          } else {
            const labelid = `${elements[i].id}-l`;
            const label = document.getElementById(`${labelid}`);
            const aa = document.getElementById(`${aaid}`);
            alert(`Please Select ${label.textContent} File`);
            label.style.color = "red";
            aa.style.color = "red";
            play = false;
            break;
          }
        } else if (elements[i].nodeName.toLowerCase() != "textarea") {
          //loading of input and select fields
          if (elements[i].value != "") {
            this.fields[`${elements[i].id}`] = elements[i].value;
            elements[i].style.borderColor = "#deeaeb";
          } else {
            elements[i].style.borderColor = "red";
            alert("Please Fill In the Required Fields in Red");
            play = false;
            break;
          }
        } else {
          this.fields[`${elements[i].id}`] = elements[i].value;
        }
      }
      if (play) {
        this.aaids.forEach((i) => {
          document.getElementById(`${i}`).textContent = "No File Chosen";
        });
        form.reset();
        const formData = new FormData();
        this.files.forEach((elm, ind) => {
          formData.append(`files[${ind}]`, elm);
        });
        formData.append("fields", JSON.stringify(this.fields));
        DemoService.postSendung(formData)
          .then(() => {
            console.log("SUCCESS!!");
          })
          .catch(() => {
            console.log("FAILURE!!");
          });
      }
    },
  },
};
</script>
