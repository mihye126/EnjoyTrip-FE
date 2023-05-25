import http from "@/axios/axios-common.js";

async function findById(tripId) {
    http.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    const response = await http.get(`/trips/${tripId}`);
    return response.data.data;
  }

export { findById };
