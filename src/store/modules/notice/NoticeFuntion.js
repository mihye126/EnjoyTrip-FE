import http from "@/axios/axios-common.js";

async function noticeAllList(success, fail) {
  await http.get(`/notices`).then(success).catch(fail);
}

export { noticeAllList };
