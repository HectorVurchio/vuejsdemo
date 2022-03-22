export default {
  chkEmptyElm(element) {
    const files = [];
    const fields = {};
    const aaids = [];
    let play = true;
    const fieldBC = "#deeaeb";
    const form = element.form;
    const elements = form.elements;
    for (let i = 0; i < elements.length; i++) {
      //Searching for input files
      if (
        elements[i].nodeName.toLowerCase() == "input" &&
        elements[i].type.toLowerCase() == "file"
      ) {
        const aaid = `${elements[i].id}-p`;
        //if there is a selected file
        if (elements[i].files[0] != undefined) {
          files.push(elements[i].files[0]);
          aaids.push(aaid);
        } else {
          //there is no selected file
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
        //The field is an input type text or select
        if (elements[i].value != "") {
          fields[`${elements[i].id}`] = elements[i].value;
          elements[i].style.borderColor = fieldBC;
        } else {
          // this field is empty
          elements[i].style.borderColor = "red";
          alert("Please Fill In the Required Fields in Red");
          play = false;
          break;
        }
      } else {
        //the field is the textArea
        fields[`${elements[i].id}`] = elements[i].value;
      }
    }
    return [files, fields, aaids, play];
  },
};
