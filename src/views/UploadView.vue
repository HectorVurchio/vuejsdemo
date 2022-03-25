<template>
  <HeadBar msg="Upload List" />

  <div v-if="!upFiles">Loading Please wait...</div>

  <div v-else class="upfiles">
    <TableRow :items="upFiles" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{
          name: 'uploads',
          params: { id: 'uploads' },
          query: { _limit: 2, _page: page - 1 },
        }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <router-link
        id="page-next"
        :to="{
          name: 'uploads',
          params: { id: 'uploads' },
          query: { _limit: 2, _page: page + 1 },
        }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>
<script>
import HeadBar from "@/components/HeadBar.vue";
import TableRow from "@/components/TableRow.vue";
import DemoService from "@/services/DemoService.js";
export default {
  name: "UploadView",
  components: {
    HeadBar,
    TableRow,
  },
  props: ["page"],
  data() {
    return {
      upFiles: null,
      totalUpFiles: 0,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    DemoService.getErhalten(2, parseInt(routeTo.query._page) || 1)
      .then((response) => {
        next((cp) => {
          cp.upFiles = response.data.RecSet;
          cp.totalUpFiles = response.data.NumSet;
        });
      })
      .catch((error) => {
        console.log(error);
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(routeTo) {
    return DemoService.getErhalten(2, parseInt(routeTo.query._page) || 1)
      .then((response) => {
        this.upFiles = response.data.RecSet;
        this.totalUpFiles = response.data.NumSet;
      })
      .catch((error) => {
        console.log(error);
        return { name: "NetworkError" };
      });
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      var totalPages = Math.ceil(this.totalUpFiles / 2); // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages;
    },
  },
};
</script>
<style scoped>
.upfiles {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
