<template>
  <div class="outer-2">
    <div class="date"><p></p></div>
    <div class="title-2"><h1>.xlsx files</h1></div>
    <div class="container" id="container-one">
      <div @click="filebtnclk" class="file-btn" id="file-btn-1"></div>
      <div @click="filebtnclk" class="file-btn" id="file-btn-2"></div>
      <div @click="filebtnclk" class="file-btn" id="file-btn-3"></div>
    </div>
    <div class="container" id="container-two">
      <div class="table-zone"></div>
      <div class="graphic-zone"><h2>Chart goes here</h2></div>
    </div>
    <div class="container" id="container-three">
      <p>Notes:</p>
      <textarea readonly></textarea>
    </div>
  </div>
</template>
<script>
import EventPage from "@/services/EventPage.js";
import Table from "@/services/Table.js";
import DemoService from "@/services/DemoService.js";
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const objDB = JSON.parse(vm.$store.state.uploadval);
      const date = document.getElementsByClassName("date");
      let txt = document.createTextNode(objDB["date"]);
      date[0].childNodes[0].appendChild(txt);
      const btn = document.getElementsByClassName("file-btn");
      txt = document.createTextNode(objDB["file_one_name"]);
      btn[0].appendChild(txt);
      txt = document.createTextNode(objDB["file_two_name"]);
      btn[1].appendChild(txt);
      txt = document.createTextNode(objDB["file_three_name"]);
      btn[2].appendChild(txt);
      const txtarea = document.getElementsByTagName("textarea");
      txt = document.createTextNode(objDB["note"]);
      txtarea[0].appendChild(txt);
      //console.log(JSON.parse(vm.$store.state.uploadval));
    });
  },
  methods: {
    filebtnclk(event) {
      const element = event.target;
      const file = element.childNodes[0].data;
      DemoService.getExcel(file)
        .then((response) => {
          const tableZone = document.getElementsByClassName("table-zone");
          while (tableZone[0].hasChildNodes()) {
            tableZone[0].removeChild(tableZone[0].firstChild);
          }
          const table = new Table(response.data).createTable();
          tableZone[0].appendChild(table);
        })
        .then(() => {
          EventPage.selectedButton(element, "file-btn");
        });
    },
  },
};
</script>
<style scoped>
.outer-2 {
  display: flex;
  flex-direction: column;
  font-family: ROBOTO;
}
.date {
  display: flex;
  justify-content: flex-end;
  height: 30px;
}
.date p {
  margin-right: 8%;
  font-size: 16px;
}
.title-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#container-one {
  height: 90px;
}
.file-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background: linear-gradient(to top right, #41b782, #86d169);
  margin: 2%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
}
.file-btn-pushed {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background: #fff;
  margin: 2%;
  font-size: 20px;
  color: #41b782;
  cursor: pointer;
  border: 1px solid #86d169;
  border-radius: 7px;
}
.file-btn:hover {
  padding: 0.5%;
  font-weight: bold;
  background: #86d169;
  transition: padding 0.2s ease-out;
}
.file-btn:active {
  color: #d1edcc;
}

#container-two .table-zone,
#container-two .graphic-zone {
  width: 45%;
  justify-content: center;
  align-items: center;
}
#container-two .graphic-zone {
  display: flex;
}
#container-two .table-zone {
  height: 400px;
  overflow: auto;
}

#container-two .table-zone table {
  width: 100%;
  border-collapse: collapse;
}

#container-two .table-zone table th {
  background: #41b782;
  color: #fff;
  position: sticky;
  top: 0;
}

#container-two .table-zone table th,
td {
  text-align: center;
  border: 1px solid #ceeadd;
  padding: 8px;
  font-size: 16px;
}

#container-three {
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 2%;
}

#container-three p {
  width: 90%;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
#container-three textarea {
  width: 90%;
  height: 90%;
  font-family: ROBOTO;
  font-size: 20px;
  border: 0px solid;
  padding: 12px 20px;
  border: 1px solid #ceeadd;
}

#container-two .table-zone::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

#container-two .table-zone::-webkit-scrollbar-button {
  width: 5px;
  height: 0px;
}

#container-two .table-zone::-webkit-scrollbar-thumb {
  background: linear-gradient(to top right, #41b782, #86d169);
  border: 0px solid transparent;
  border-radius: 50px;
}

#container-two .table-zone::-webkit-scrollbar-thumb:active {
  background: #fff;
}

#container-two .table-zone::-webkit-scrollbar-track {
  background: #ceeadd;
  border: 0px none #ffffff;
  border-radius: 53px;
}

#container-two .table-zone::-webkit-scrollbar-track:active {
  background: #ceeadd;
}

#container-two .table-zone::-webkit-scrollbar-corner {
  background: transparent;
}

@media only screen and (max-width: 600px) {
  #container-two {
    flex-direction: column;
  }
  #container-two .table-zone,
  #container-two .graphic-zone {
    width: 90%;
  }
}

@media only screen and (max-width: 500px) {
  #container-one {
    flex-direction: column;
    height: 240px;
  }
  .file-btn,
  .file-btn-pushed {
    margin: 3%;
    font-size: 18px;
  }
  #container-two .table-zone table th,
  td {
    padding: 4px;
    font-size: 14px;
  }
  #container-three textarea {
    font-size: 14px;
  }
}
</style>
