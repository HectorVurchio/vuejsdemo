class FormService {
  files = [];
  fields = {};
  aaids = [];
  fieldBC = "#deeaeb";
  constructor(element) {
    this.form = element.form;
    this.elements = this.form.elements;
    this.play = true;
  }
  chkEmptyElm() {
    for (let i = 0; i < this.elements.length; i++) {
      //Searching for input files
      if (
        this.elements[i].nodeName.toLowerCase() == "input" &&
        this.elements[i].type.toLowerCase() == "file"
      ) {
        const aaid = `${this.elements[i].id}-p`;
        //if there is a selected file
        if (this.elements[i].files[0] != undefined) {
          this.files.push(this.elements[i].files[0]);
          this.aaids.push(aaid);
        } else {
          //there is no selected file
          const labelid = `${this.elements[i].id}-l`;
          const label = document.getElementById(`${labelid}`);
          const aa = document.getElementById(`${aaid}`);
          alert(`Please Select ${label.textContent} File`);
          label.style.color = "red";
          aa.style.color = "red";
          this.play = false;
          break;
        }
      } else if (this.elements[i].nodeName.toLowerCase() != "textarea") {
        //The field is an input type text or select
        if (this.elements[i].value != "") {
          this.fields[`${this.elements[i].id}`] = this.elements[i].value;
          this.elements[i].style.borderColor = this.fieldBC;
        } else {
          // this field is empty
          this.elements[i].style.borderColor = "red";
          alert("Please Fill In the Required Fields in Red");
          this.play = false;
          break;
        }
      } else {
        //the field is the textArea
        this.fields[`${this.elements[i].id}`] = this.elements[i].value;
      }
    }
    return [this.files, this.fields, this.play];
  }
}
export { FormService };
