import jwtDecode from "jwt-decode";
import router from "@/router";
import { login, findById, tokenRegeneration, logout } from "./userfuntion";

export const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isValidToken: false,
    isAdmin: false,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
    checkToken: function (state) {
      return state.isValidToken;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_IS_VALID_TOKEN: (state, isValidToken) => {
      state.isValidToken = isValidToken;
    },
    SET_USER_INFO: (state, userInfo) => {
      // state.isLogin = true;
      state.userInfo = userInfo;
    },
    SET_IS_ADMIN: (state, isAdmin) => {
      state.isAdmin = isAdmin;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      console.log("user", user);
      await login(
        user,
        ({ data }) => {
          if (data.data != null) {
            console.log("다 된거니??", data);
            let accessToken = data.data["accessToken"];
            let refreshToken = data.data["refreshToken"];
            // console.log("login success token created!!!! >> ", accessToken, refreshToken);
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_VALID_TOKEN", true);
            commit("SET_USER_INFO", data.data["userName"]);

            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
            console.log("관리자니?", data.data["admin"]);
            //관리자 계정인 경우
            if (data.data["admin"] === true) {
              commit("SET_IS_ADMIN", true);
            }
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
            commit("SET_IS_VALID_TOKEN", false);
            alert("이메일 또는 비번이 틀렸습니다. 다시 입력해주세요");
            // console.log("아니구나", data);
          }
        },
        (error) => {
          alert("이메일 또는 비번이 틀렸습니다. 다시 입력해주세요");
          console.log(error);
          // console.log("또 에러인거니?");
        }
      );
    },

    //일단 마이페이지에서 사용하기로 합시다. => 대신 유저 이름 뿐만 아니라 유저 객체 반환하도록 생성
    async getUserInfo({ commit, dispatch }, token) {
      let decodeToken = jwtDecode(token);
      // console.log("2. getUserInfo() decodeToken :: ", decodeToken.userid);
      await findById(
        decodeToken.userid,
        ({ data }) => {
          console.log("data확인: " + data.userInfo + " " + data.message);
          if (data.message === "success") {
            commit("SET_USER_INFO", data.userInfo);
            // console.log("3. getUserInfo data >> ", data);
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        async (error) => {
          console.log(
            "getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ",
            error.response.status
          );
          commit("SET_IS_VALID_TOKEN", false);
          await dispatch("tokenRegeneration");
        }
      );
    },
    async tokenRegeneration({ commit, state }) {
      console.log("토큰 재발급 >> 기존 토큰 정보 : {}", sessionStorage.getItem("access-token"));
      await tokenRegeneration(
        JSON.stringify(state.userInfo),
        ({ data }) => {
          if (data.message === "success") {
            let accessToken = data["access-token"];
            console.log("재발급 완료 >> 새로운 토큰 : {}", accessToken);
            sessionStorage.setItem("access-token", accessToken);
            commit("SET_IS_VALID_TOKEN", true);
          }
        },
        async (error) => {
          // HttpStatus.UNAUTHORIZE(401) : RefreshToken 기간 만료 >> 다시 로그인!!!!
          if (error.response.status === 401) {
            console.log("갱신 실패");
            // 다시 로그인 전 DB에 저장된 RefreshToken 제거.
            await logout(
              state.userInfo.userid,
              ({ data }) => {
                if (data.message === "success") {
                  console.log("리프레시 토큰 제거 성공");
                } else {
                  console.log("리프레시 토큰 제거 실패");
                }
                alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
                commit("SET_IS_LOGIN", false);
                commit("SET_USER_INFO", null);
                commit("SET_IS_VALID_TOKEN", false);
                router.push({ name: "login" });
              },
              (error) => {
                console.log(error);
                commit("SET_IS_LOGIN", false);
                commit("SET_USER_INFO", null);
              }
            );
          }
        }
      );
    },
    async userLogout({ commit }, userid) {
      await logout(
        userid,
        ({ data }) => {
          if (data.message === "success") {
            commit("SET_IS_LOGIN", false);
            commit("SET_USER_INFO", null);
            commit("SET_IS_VALID_TOKEN", false);

            //로그아웃한 계정의 정보가 관리자 계정인 경우
            if (this.isAdmin === true) {
              commit("SET_IS_ADMIN", false);
            }
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
