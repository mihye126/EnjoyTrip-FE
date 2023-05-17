import Vue from "vue";
import Vuex from "vuex";
import Constant from "@/util/Contant.js";
import http from "@/axios/axios-common.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    //data관리, 여러개의 컴포넌트에서 사용할 데이터 입력
    todos: [],
    todo: {},
  },
  actions: {
    // //비동기 호출
    // [Constant.ALL_TODO]: (store) => {
    //   http.get("/todo").then((response) => {
    //     store.commit(Constant.ALL_TODO, { todos: response.data }); //mutation 호출,
    //     //서버에서 온 결과를 어떤 데이터를 작업해야 되는지와 함께 mutation에 보냄
    //   });
    // },
    [Constant.LOGIN_ACCOUNT]: (store, payload) => {
      console.log(store);
      console.log(payload.id, payload.pw);
      http.post("/account", payload).then((response) => alert(response.data.login));

      //   http.post("/account").then(() => {
      //     // store.commit(Constant.LOGIN_ACCOUNT, { todos: response.data }); //mutation 호출,
      //     //서버에서 온 결과를 어떤 데이터를 작업해야 되는지와 함께 mutation에 보냄
      //   });
    },

    //
  },
});

export default store;
