<template>
  <HeadBar msg="Upload List" />

  <div class="upfiles">
    <table v-if="!upFiles">
      Loading Please wait...
    </table>
    <table v-else>
      <TableHead :items="thData" />
      <TableRow :items="upFiles" :mustBe="mustBe" />
    </table>

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
import TableHead from "@/components/TableHead.vue";
import TableRow from "@/components/TableRow.vue";
import DemoService from "@/services/DemoService.js";
export default {
  name: "UploadView",
  components: {
    HeadBar,
    TableHead,
    TableRow,
  },
  props: ["page"],
  data() {
    return {
      upFiles: null,
      totalUpFiles: 0,
      mustBe: [
        "prefix",
        "machine_name",
        "test_number",
        "start_phase",
        "end_phase",
        "start_stroke",
        "end_stroke",
        "bioethanol",
      ],
      thData: null,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    DemoService.getErhalten(2, parseInt(routeTo.query._page) || 1)
      .then((response) => {
        next((cp) => {
          cp.upFiles = response.data.RecSet;
          cp.totalUpFiles = response.data.NumSet;
          cp.tableHead = response.data.RecSet;
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
        this.tableHead = response.data.RecSet;
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
    tableHead: {
      get() {
        return this.thData;
      },
      set(val) {
        this.thData = Array.isArray(val) ? this.tableKeys(val[0]) : [];
      },
    },
  },
  methods: {
    tableKeys(objData) {
      let words = [];
      if (objData != undefined && typeof objData == "object") {
        for (const [key] of Object.entries(objData)) {
          if (this.mustBe.includes(key)) {
            let keyword = key.split("_");
            for (let i = 0; i < keyword.length; i++) {
              keyword[i] =
                keyword[i].charAt(0).toUpperCase() + keyword[i].slice(1);
            }
            words.push(keyword.join(" "));
          }
        }
      }
      return words;
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background: #2c3e50;
  color: #f3f3f3;
}
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
@media only screen and (max-width: 590px) {
  .upfiles {
    font-size: 10px;
  }
}
</style>
