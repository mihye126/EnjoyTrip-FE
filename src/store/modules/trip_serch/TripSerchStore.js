import { TripSerchAllList, endPageNum } from "./TripSerchFuntion";

export const TripSerchStore = {
  namespaced: true,
  state: {
    TripSerch: [],
    endPage: 0,
    endIdx: 0,
  },
  getters: {},
  mutations: {
    SET_TripSerch: (state, data) => {
      state.TripSerch = data;
    },
    SET_ENDPAGENUM: (state, data) => {
      state.endIdx = data.count;
      state.endPage = parseInt(state.endIdx / 10 + 1);
    },
  },

  actions: {
    async TripSerchList({ commit }, input) {
      await TripSerchAllList(
        input.sidoCode,
        input.contentTypeId,
        input.keyword,
        (input.page - 1) * 10,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            commit("SET_TripSerch", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    async EndPageNum({ commit }, input) {
      await endPageNum(
        input.sidoCode,
        input.contentTypeId,
        input.keyword,
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
  },
};
