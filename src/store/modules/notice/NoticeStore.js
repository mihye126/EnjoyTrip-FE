import { noticeAllList, endPageNum, deleteItem, insertItem, modifyItem } from "./NoticeFuntion";

export const NoticeStore = {
  namespaced: true,
  state: {
    notice: [],
    endPage: 0,
    endIdx: 0,
  },
  getters: {},
  mutations: {
    SET_NOTICE: (state, data) => {
      state.notice = data;
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
    },
  },

  actions: {
    async NoticeList({ commit }, pagenum) {
      await noticeAllList(
        (pagenum - 1) * 10,
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
  },
};
