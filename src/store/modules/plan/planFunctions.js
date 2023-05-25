import http from "@/axios/axios-common.js";

async function TripSerchAllList(sidoCode, contentTypeId, keyword, pagenum, success, fail) {
  console.log("페이지 ", pagenum);
  await http
    .get(
      `/trips/search?sidoCode=${sidoCode}&contentTypeId=${contentTypeId}&keyword=${keyword}&pageNum=${pagenum}`
    )
    .then(success)
    .catch(fail);
}
async function endPageNum(sidoCode, contentTypeId, keyword, success, fail) {
  await http
    .get(`/trips/count?sidoCode=${sidoCode}&contentTypeId=${contentTypeId}&keyword=${keyword}`)
    .then(success)
    .catch(fail);
  // await http.get(`/trips/count`).then(success).catch(fail);
}

export { TripSerchAllList, endPageNum };
 