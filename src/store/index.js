import Vue from "vue";
import Vuex from "vuex";
import { userStore } from "./modules/userStore";
import { planStore } from "./modules/planStore";

import createPersistedState from "vuex-persistedstate";

// import Constant from "@/util/Contant.js";
// import http from "@/axios/axios-common.js";

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    userStore,
    planStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],

  state: {
    //data관리, 여러개의 컴포넌트에서 사용할 데이터 입력
    todos: [],
    todo: {},
    blog: {},
  },
});
