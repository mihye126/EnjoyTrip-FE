import jwtDecode from "jwt-decode";
import router from "@/router";
import {
  login,
  findById,
  tokenRegeneration,
  logout,
  updateLoginUser,
  deleteUser,
  registerUser,
  findbyemail,
  modifyuserpw,
} from "./userfuntion";

export const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isValidToken: false,
    isAdmin: false,
    findByEmailCheck: false,
    modifyuserid: null,

    LoginUser: {
      id: null,
      userEmail: null,
      userPhone: null,
      userName: null,
    },
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
    checkToken: function (state) {
      return state.isValidToken;
    },
    checkIsAdmin: function (state) {
      return state.isAdmin;
    },
    checkUserId: function (state) {
      return state.LoginUser.id;
    },
    // checkUserPW: function (state) {
    //   return state.LoginUser.userPw;
    // },
    checkUserEmail: function (state) {
      return state.LoginUser.userEmail;
    },
    checkUserPhone: function (state) {
      return state.LoginUser.userPhone;
    },
    checkUserName: function (state) {
      return state.LoginUser.userName;
    },
    checkFindByEmail: function (state) {
      return state.findByEmailCheck;
    },
    checkModifyUserId: function (state) {
      return state.modifyuserid;
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
      state.userInfo = userInfo;
    },
    SET_IS_ADMIN: (state, isAdmin) => {
      state.isAdmin = isAdmin;
    },
    SET_MODIFY_USER_ID: (state, id) => {
      state.modifyuserid = id;
    },

    //추가로 넣은 부분, userID && isAdmin도 loginUser객체로 넣는게 나을려나...?
    SET_LOGINUSER_ID: (state, userId) => {
      state.LoginUser.id = userId;
    },
    SET_LOGINUSER_NAME: (state, userName) => {
      state.LoginUser.userName = userName;
    },
    SET_LOGINUSER_EMAIL: (state, userEmail) => {
      state.LoginUser.userEmail = userEmail;
    },
    SET_LOGINUSER_PHONE: (state, userPhone) => {
      state.LoginUser.userPhone = userPhone;
    },
    SET_FIND_BY_EMAIL_CHECK: (state, emailcheck) => {
      state.findByEmailCheck = emailcheck;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      console.log("user", user);
      await login(
        user,
        ({ data }) => {
          // console.log(data);
          if (data.data != null) {
            console.log("다 된거니??", data);
            let accessToken = data.data["accessToken"];
            let refreshToken = data.data["refreshToken"];
            // console.log("login success token created!!!! >> ", accessToken, refreshToken);
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_VALID_TOKEN", true);

            commit("SET_LOGINUSER_ID", data.data["id"]);
            commit("SET_LOGINUSER_NAME", data.data["userName"]);
            commit("SET_LOGINUSER_EMAIL", data.data["userEmail"]);
            commit("SET_LOGINUSER_PHONE", data.data["userPhone"]);

            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
            //관리자 계정인 경우
            if (data.data["admin"] === true) {
              commit("SET_IS_ADMIN", true);
            }
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
            commit("SET_IS_VALID_TOKEN", false);
            alert("이메일 또는 비번이 틀렸습니다. 다시 입력해주세요");
          }
        },
        (error) => {
          alert("이메일 또는 비번이 틀렸습니다. 다시 입력해주세요");
          console.log(error);
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
          console.log(data);
          if (data.error == null) {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_VALID_TOKEN", false);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_ADMIN", false);

            commit("SET_LOGINUSER_ID", null);
            commit("SET_LOGINUSER_NAME", null);
            commit("SET_LOGINUSER_EMAIL", null);
            commit("SET_LOGINUSER_PHONE", null);

            sessionStorage.removeItem("access-token");
            sessionStorage.removeItem("refresh-token");
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },

    async UpdateLoginUser({ commit }, user) {
      await updateLoginUser(
        user,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            let accessToken = data.data["accessToken"];
            let refreshToken = data.data["refreshToken"];

            // commit("SET_LOGINUSER_ID", data.data["id"]);
            commit("SET_LOGINUSER_NAME", user.user_name);
            // commit("SET_LOGINUSER_EMAIL", data.data["userEmail"]);
            commit("SET_LOGINUSER_PHONE", user.user_phone);

            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
          } else {
            console.log("유저 수정 실패!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async DeleteUser({ commit }, id) {
      await deleteUser(
        id,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_VALID_TOKEN", false);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_ADMIN", false);

            commit("SET_LOGINUSER_ID", null);
            commit("SET_LOGINUSER_NAME", null);
            commit("SET_LOGINUSER_EMAIL", null);
            commit("SET_LOGINUSER_PHONE", null);

            sessionStorage.removeItem("access-token");
            sessionStorage.removeItem("refresh-token");
            router.push("/");
          } else {
            console.log("유저 탈퇴 실패!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async RegisterUser({ commit }, user) {
      await registerUser(
        user,
        ({ data }) => {
          console.log(commit);
          if (data.data != null) {
            alert("회원가입이 완료되었습니다. 로그인 후에 이용해주세요");
            router.push("/");
          } else {
            alert("회원가입에 실패하였습니다. 정보를 다시 입력해주세요");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async FindByEmail({ commit }, email) {
      console.log(email);
      await findbyemail(
        email,
        ({ data }) => {
          console.log(commit);
          if (data.data != null) {
            console.log(data.data);
            commit("SET_FIND_BY_EMAIL_CHECK", true);
            commit("SET_MODIFY_USER_ID", data.data.id);
          } else {
            alert("해당 유저는 존재하지 않습니다. 이메일을 다시 입력해주세요.");
            commit("SET_FIND_BY_EMAIL_CHECK", false);
            console.log("유저 이메일 조회 실패!!!", data.data, "@@@", data.error);
          }
        },
        (error) => {
          alert("해당 유저는 존재하지 않습니다. 이메일을 다시 입력해주세요.");

          commit("SET_FIND_BY_EMAIL_CHECK", false);

          console.log("WWW", error);
        }
      );
    },
    async ModifyUserPw({ commit }, request) {
      console.log(request);
      await modifyuserpw(
        request,
        ({ data }) => {
          console.log(commit);
          if (data.data != null) {
            alert("비밀번호 변경이 완료되었습니다. 로그인 후 이용해주세요.");
            console.log(data.data);
            router.push("/login");
          } else {
            alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요");

            console.log("비밀번호 변경 실패!!!", data.data, "@@@", data.error);
          }
        },
        (error) => {
          alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요");

          console.log("WWW", error);
        }
      );
    },
  },
};
