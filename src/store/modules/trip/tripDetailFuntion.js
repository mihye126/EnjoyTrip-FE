import http from "@/axios/axios-common.js";

async function tripDetail(contentID, success, fail) {
  await http.get(`/trips/${contentID}`).then(success).catch(fail);
}

export { tripDetail };
