// import http from "@/axios/axios-common.js";
import { tripDetail } from "./tripDetailFuntion";
import router from "@/router";

export const tripDetailStore = {
  namespaced: true,
  state: {
    attraction: [],
  },
  getters: {
    //   triplist: function (state) {
    //     return state.attraction;
    //   },
  },
  mutations: {
    SET_TRIP_DETAIL: (state, data) => {
      // console.log("이러지마 제발...", data);
      state.attraction = data;
      // console.log("확인 ", state.attraction);
    },
  },

  actions: {
    async TripDetailinfo({ commit }, contentID) {
      await tripDetail(
        contentID,
        ({ data }) => {
          // console.log(data);
          if (data.data != null) {
            commit("SET_TRIP_DETAIL", data.data);
          } else {
            alert(data.error);
            router.push("/");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
