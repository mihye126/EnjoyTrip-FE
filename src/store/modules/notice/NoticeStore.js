<<<<<<< HEAD
import { noticeAllList } from "./NoticeFuntion";
// import router from "@/router";
=======
import { noticeAllList, endPageNum, deleteItem, insertItem, modifyItem } from "./NoticeFuntion";
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf

export const NoticeStore = {
  namespaced: true,
  state: {
    notice: [],
<<<<<<< HEAD
=======
    endPage: 0,
    endIdx: 0,
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
  },
  getters: {},
  mutations: {
    SET_NOTICE: (state, data) => {
      state.notice = data;
<<<<<<< HEAD
      console.log("///", state.notice);
=======
    },
    SET_ENDPAGENUM: (state, data) => {
      // console.log(data);
      state.endIdx = data.pageNum;
      // console.log("???", state.endIdx);
      state.endPage = parseInt(state.endIdx / 10 + 1);
    },
    SET_DOWNEDNIDX: () => {
      this.state.endIdx--;
      this.state.endPage = parseInt(this.state.endIdx / 10 + 1);
    },
    SET_UPIDX: () => {
      this.state.endIdx++;
      this.state.endPage = parseInt(this.state.endIdx / 10 + 1);
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
    },
  },

  actions: {
    async NoticeList({ commit }, pagenum) {
<<<<<<< HEAD
      console.log("notice 연결됨?", pagenum);
      await noticeAllList(
=======
      await noticeAllList(
        (pagenum - 1) * 10,
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
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
<<<<<<< HEAD
=======
    async EndPageNum({ commit }) {
      console.log("notice 연결됨?");
      await endPageNum(
        ({ data }) => {
          if (data.error == null) {
            commit("SET_ENDPAGENUM", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async DeleteItem({ commit }, id) {
      await deleteItem(
        id,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            commit("SET_DOWNEDNIDX");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async InsertItem({ commit }, notice) {
      console.log("???", notice);
      await insertItem(
        notice,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            commit("SET_UPIDX");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async ModifyItem({ commit }, notice) {
      console.log(">>>", notice);
      await modifyItem(
        notice,
        ({ data }) => {
          if (data.error == null) {
            console.log(data, commit);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
  },
};
