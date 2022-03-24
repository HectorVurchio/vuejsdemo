<template>
  <div>
    <h1>User {{ $route.params.id }}</h1>
    <h2>{{ event.title }}</h2>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <h3>Button Click {{ btnclk }} times!</h3>
    <button @click="methodone">Click Me!</button>
    <p>You are on page {{ $route.query._page }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: null,
      btnclk: null,
    };
  },
  created() {
    // fetch event (by id) and set local event data
    this.event = {
      title: "Titulo",
      time: "12:00",
      date: "23/01/2023",
      location: "Caracas",
      description: "We hope yo will be present",
    };
    this.btnclk = 0;
    console.log("events: ", this.event);
    console.log("btnclk: ", this.btnclk);
  },
  computed: {
    btnclkplus: {
      get() {
        return this.btnclk;
      },
      set(val) {
        this.btnclk = val;
      },
    },
  },
  methods: {
    methodone() {
      const par = this.$route.params;
      const quer = this.$route.query;
      this.btnclkplus++;
      console.log("parameters", par);
      console.log("query", quer);
    },
  },
  watch: {
    btnclk(newVal, oldVal) {
      console.log(
        `Old Value of btnclk: ${oldVal}, New Value ov btnclk: ${newVal}`
      );
    },
  },
};
</script>
