import http from "@/axios/axios-common.js";

async function blogAllList(success, fail) {
  console.log(`/blogs`);
  await http.get(`/blogs`).then(success).catch(fail);
}
async function blogFindById(id,success, fail) {
    console.log(`/blogs/${id}`);
    await http.get(`/blogs/${id}`).then(success).catch(fail);
  }
async function blogCount(success, fail) {
  await http.get(`/blogs/count`).then(success).catch(fail);
}
async function deletePost(id, success, fail) {
  await http.delete(`/blogs/${id}`).then(success).catch(fail);
}
async function insertPost(post, success, fail) {
  console.log("insert",post)
  await http.post(`/blogs`, post).then(success).catch(fail);
}
async function modifyPost(post, success, fail) {
  await http.put(`/blogs`, post).then(success).catch(fail);
}

export { blogAllList, blogCount, deletePost, insertPost, modifyPost, blogFindById};
