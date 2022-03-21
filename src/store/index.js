import { createStore } from "vuex";

export default createStore({
  state: {
    files: [],
  },
  getters: {},
  mutations: {
    ADD_FILES(state, fileADD) {
      state.files.push(fileADD);
    },
  },
  actions: {},
  modules: {},
});
