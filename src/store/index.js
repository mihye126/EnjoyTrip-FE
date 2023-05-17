import Vue from "vue";
import Vuex from "vuex";
// import Constant from "@/util/Contant.js";
// import http from "@/axios/axios-common.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    //data관리, 여러개의 컴포넌트에서 사용할 데이터 입력
    todos: [],
    todo: {},
    token: null,
    blog:{},
  },
  getters: {
    isLogin(state) {
      return state.token == null ? false : true;
    },
  },
  mutations: {
    // commit 으로 부를 수 있다.
    setToken(state, _token) {
      state.token = _token;
    },
  },
  actions: {
    setToken: ({ commit }, _token) => {
      commit("setToken", _token);
    },
  },
});

export default store;
