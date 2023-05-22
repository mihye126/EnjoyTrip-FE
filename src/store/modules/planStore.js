import {findById} from "./planFunctions";

export const planStore = {
  namespaced: true,
  state: {
    trips: [],
    trip_ids: [125266, 125405, 125406, 125407, 125408]
  },
  getters: {
    GET_TRIPS: function (state) {
      return state.trips;
    },
  },
  mutations: {
    ADD_TRIP_INFO(state, trip) {
        state.trips.push(trip);
      },
  },
  actions: {
    GET_TRIP_INFO: async ({ state, commit }) => {
        state.trips = []; // 액션이 호출될 때마다 state.trips를 비워줌
  
        for (const tripId of state.trip_ids) {
          const trip = await findById(tripId);
          commit("ADD_TRIP_INFO", trip);
        }
  
        console.log("trips", state.trips);
      },

  },
};
