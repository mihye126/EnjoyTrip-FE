import http from "@/axios/axios-common.js";

async function login(user, success, fail) {
  await http.post(`/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  http.defaults.headers["accessToken"] = sessionStorage.getItem("access-token");
  await http.get(`/account/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  http.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await http.post(`/account/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await http.get(`/user/logout/${userid}`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
