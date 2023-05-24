import http from "@/axios/axios-common.js";

async function noticeAllList(pagenum, success, fail) {
  console.log(`/notices/${pagenum}`);
  await http.get(`/notices/${pagenum}`).then(success).catch(fail);
}
async function endPageNum(success, fail) {
  await http.get(`/notices/count`).then(success).catch(fail);
}
async function deleteItem(id, success, fail) {
  await http.delete(`/notices/${id}`).then(success).catch(fail);
}
async function insertItem(notice, success, fail) {
  await http.post(`/notices`, notice).then(success).catch(fail);
}
async function modifyItem(notice, success, fail) {
  await http.put(`/notices`, notice).then(success).catch(fail);
}

export { noticeAllList, endPageNum, deleteItem, insertItem, modifyItem };
