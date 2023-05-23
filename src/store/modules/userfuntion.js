import http from "@/axios/axios-common.js";

async function login(user, success, fail) {
  console.log(user);
  await http.post(`/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  http.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await http.get(`/my-page`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  http.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await http.post(`/token/refresh`, user).then(success).catch(fail);
}

async function logout(success, fail) {
  await http.get(`/logout`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
