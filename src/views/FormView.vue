<template>
  <HeadBar msg="Create Test" />
  <div class="outer">
    <form action="">
      <label class="form-label-1">Test Configuration</label>
      <div class="container">
        <div class="test-conf" id="test-conf-form">
          <RowFirst />
          <RowSecond />
          <RowThird />
          <RowFourth />
        </div>
        <div class="test-input-files">
          <label class="form-label-2">Test Configuration</label>
          <RowSixth label="TDMD Data File:" fileid="file1" />
          <RowSixth label="Config Log File:" fileid="file2" />
          <RowSixth label="Start Stroke:" fileid="file3" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import RowFirst from "@/components/RowFirst.vue";
import RowSecond from "@/components/RowSecond.vue";
import RowThird from "@/components/RowThird.vue";
import RowFourth from "@/components/RowFourth.vue";
import RowSixth from "@/components/RowSixth.vue";
import HeadBar from "@/components/HeadBar.vue";

export default {
  name: "FormView",
  components: {
    RowFirst,
    RowSecond,
    RowThird,
    RowFourth,
    RowSixth,
    HeadBar,
  },
};
</script>
<style>
.outer {
  width: 100%;
  padding-top: 40px;
  background-color: #deeaeb;
  padding-bottom: 40px;
}
form {
  width: 845px;
  height: 440px;
  margin: auto;
  background-color: white;
  border: 1px solid #deeaeb;
  border-radius: 16px;
  box-sizing: border-box;
  text-align: left;
}

.container {
  display: flex;
}

.test-conf {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60%;
  height: 380px;
  padding: 20px;
  box-sizing: border-box;
}

.form-label-1 {
  width: 100%;
  padding: 3%;
  font-weight: bold;
  font-size: 20px;
  font-family: "Roboto";
  margin-bottom: 12px;
}

.form-label-1 {
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  font-family: "Roboto";
  margin-bottom: 12px;
}

.form-row-1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
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

.hor-col-2 {
  display: flex;
}

.hor-col-2 > input,
select {
  width: 32%;
  margin-left: 2%;
  height: 26px;
  font-size: 14px;
  border: 1px solid #deeaeb;
  border-radius: 2px;
  box-sizing: border-box;
}

.form-row-2 {
  display: flex;
  margin-bottom: 16px;
}

.ver-col-1 {
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-left: 2%;
}

.ver-col-1 input {
  font-size: 14px;
  border: 1px solid #deeaeb;
  border-radius: 2px;
  box-sizing: border-box;
}

.hor-col-2 textarea {
  width: 96%;
  margin-left: 2%;
  height: 60px;
  font-size: 16px;
  border: 1px solid #deeaeb;
  border-radius: 3px;
  box-sizing: border-box;
}
label span:last-child {
  color: red;
}
.test-input-files {
  width: 36%;
  height: 320px;
  margin-top: 40px;
  padding: 20px;
  background-color: #deeaeb;
  border: 1px solid #deeaeb;
  border-radius: 16px;
  box-sizing: border-box;
}

.form-label-2 {
  width: 100%;
  padding: 3%;
  font-weight: bold;
  font-size: 16px;
  font-family: "Roboto";
  margin-bottom: 12px;
}

.test-input-files :first-child {
  margin-top: 6px;
}
.form-row-3 {
  display: flex;
  margin-bottom: 16px;
}

.ver-col-3 .btn-img-1 {
  position: relative;
  margin-top: 4px;
  padding: 12px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
}

.ver-col-3 .btn-img-1:hover {
  background-color: #a5c2c4;
}

.ver-col-3 .btn-img-1 img {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
}

.ver-col-3 .btn-img-1 a {
  margin-left: 20px;
  text-decoration: none;
  color: #534444;
}

.form-row-3 .file-selected {
  padding-left: 14px;
  display: flex;
  flex-direction: column-reverse;
}

.form-row-3 .file-selected p {
  font-size: 12px;
}
@media only screen and (min-width: 640px) and (max-width: 870px) {
  form {
    width: 600px;
  }
  .hor-col-1 label {
    font-size: 10px;
  }
  .hor-col-1 label :first-child {
    font-size: 12px;
  }
  .hor-col-2 > input,
  select {
    width: 28%;
    height: 22px;
    font-size: 12px;
  }
  .ver-col-1 {
    width: 43%;
    margin-left: 2%;
  }
  .ver-col-1 input {
    font-size: 12px;
  }
  .hor-col-2 textarea {
    width: 88%;
    font-size: 12px;
  }

  .test-input-files {
    width: 36%;
    padding: 20px;
    border-radius: 12px;
  }
  .form-row-3 {
    margin-bottom: 6px;
  }
  .ver-col-3 .btn-img-1 {
    width: 80px;
  }
  .ver-col-3 label {
    font-size: 10px;
  }
  .ver-col-3 .btn-img-1 {
    margin-top: 2px;
    padding: 6px;
    border-radius: 6px;
  }
  .ver-col-3 .btn-img-1 img {
    top: 2px;
    left: 4px;
    width: 14px;
    height: 14px;
  }
  .form-row-3 .file-selected {
    font-size: 8px;
  }
  .ver-col-3 .btn-img-1 a {
    font-size: 10px;
  }
}
@media only screen and (min-width: 430px) and (max-width: 639px) {
  form {
    width: 400px;
    height: 840px;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .test-conf {
    width: 94%;
    margin: auto;
  }
  .test-input-files {
    width: 94%;
    margin: auto;
  }
}
@media only screen and (min-width: 340px) and (max-width: 429px) {
  form {
    width: 300px;
    height: 760px;
  }
  .container {
    flex-direction: column;
  }
  .test-conf {
    width: 94%;
    margin: auto;
  }
  .test-input-files {
    width: 94%;
    margin: auto;
  }
}
@media only screen and (max-width: 339px) {
  .headbar,
  .outer {
    display: none;
  }
}
</style>
