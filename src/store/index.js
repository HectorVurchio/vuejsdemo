import { createStore } from "vuex";

export default createStore({
  state: {
    yellowMessage: "",
    redMessage: "",
    event: null,
    events: [],
    uploadval: null,
  },
  getters: {},
  mutations: {
    change_flash_yellow(state, chanPL) {
      state.yellowMessage = chanPL;
    },
    change_flash_red(state, chanPL) {
      state.redMessage = chanPL;
    },
    change_uploadval(state, chanulv) {
      state.uploadval = chanulv;
    },
  },
  actions: {},
  modules: {},
});
