import { noticeAllList } from "./NoticeFuntion";
// import router from "@/router";

export const NoticeStore = {
  namespaced: true,
  state: {
    notice: [],
  },
  getters: {},
  mutations: {
    SET_NOTICE: (state, data) => {
      state.notice = data;
      console.log("///", state.notice);
    },
  },

  actions: {
    async NoticeList({ commit }, pagenum) {
      console.log("notice 연결됨?", pagenum);
      await noticeAllList(
        ({ data }) => {
          if (data.error == null) {
            commit("SET_NOTICE", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
