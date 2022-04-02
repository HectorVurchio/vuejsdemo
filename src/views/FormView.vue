<template>
  <HeadBar msg="Create Test" />
  <div class="outer">
    <form enctype="multipart/form-data" @submit.prevent="onSubmit">
      <!--<form @submit.prevent="onSubmit">-->
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
          <RowSixth label="TDMD&nbsp;Data&nbsp;File:" fileid="file1" />
          <RowSixth label="Config&nbsp;Log&nbsp;File:" fileid="file2" />
          <RowSixth label="Start&nbsp;Stroke:" fileid="file3" />
        </div>
      </div>
      <SubmitButton />
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
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  name: "FormView",
  components: {
    RowFirst,
    RowSecond,
    RowThird,
    RowFourth,
    RowSixth,
    HeadBar,
    SubmitButton,
  },
};
</script>
<style scoped>
.outer {
  width: 100%;
  padding-top: 40px;
  background-color: #deeaeb;
  padding-bottom: 40px;
}
form {
  width: 845px;
  height: 470px;
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
@media only screen and (min-width: 640px) and (max-width: 870px) {
  form {
    width: 600px;
  }

  .test-input-files {
    width: 36%;
    padding: 20px;
    border-radius: 12px;
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
    height: 820px;
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
