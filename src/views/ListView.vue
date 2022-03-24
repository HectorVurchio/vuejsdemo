<template>
  <HeadBarTest :title="title" @changeTitle="updateTitle($event)" />
  <ListOne />
</template>

<script>
import HeadBarTest from "@/components/HeadBarTest.vue";
import ListOne from "@/components/ListOne.vue";

export default {
  name: "ListView",
  components: {
    HeadBarTest,
    ListOne,
  },
  data() {
    return { title: "View Test List" };
  },
  methods: {
    updateTitle(events) {
      this.title = events;
    },
  },
};
</script>
