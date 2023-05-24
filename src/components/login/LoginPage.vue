<template>
  <section
    class="min-vh-100 d-flex align-items-center section-image overlay-soft-dark"
    data-background="../../assets/img/background.jpg"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div
            class="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-gray-300 p-4 p-lg-5 w-100 fmxw-500"
          >
            <div class="text-center text-md-center mb-4 mt-md-0">
              <h1 class="mb-0 h3">로그인 화면</h1>
            </div>
            <form action="/account/loginProcess" method="post" class="mt-4">
              <!-- Form -->

              <div class="form-group mb-4">
                <label for="id">이메일</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"
                    ><span class="fas fa-envelope"></span
                  ></span>
                  <!-- <div v-if="`${!empty cookie.savedId.value}`"> -->
                  <input
                    type="text"
                    class="form-control"
                    placeholder="example"
                    id="email"
                    name="email"
                    v-model.lazy="user.email"
                    @keyup.enter="confirm"
                    required
                  />
                  <!-- </div> -->
                  <!-- <div v-if="`${empty cookie.savedId.value}`"> -->
                  <!-- <input type="text" class="form-control" placeholder="example" id="id" name="id" v-model="id"  required> -->
                  <!-- </div> -->
                </div>
              </div>
              <!-- End of Form -->
              <div class="form-group">
                <!-- Form -->
                <div class="form-group mb-4">
                  <label for="pass">비밀번호</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon2"
                      ><span class="fas fa-unlock-alt"></span
                    ></span>
                    <input
                      type="password"
                      placeholder="Password"
                      class="form-control"
                      id="pass"
                      name="pass"
                      v-model.lazy="user.password"
                      required
                    />
                  </div>
                </div>
                <!-- End of Form -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div class="form-check mb-0">
                    <!-- <c:if test="${!empty cookie.savedId.value}">
                                            <input class="form-check-input" type="checkbox" value="" id="remember" name="remember" checked>

                                        </c:if>
                                        <c:if test="${empty cookie.savedId.value}">
                                            <input class="form-check-input" type="checkbox" value="" id="remember" name="remember">
                                        </c:if> -->
                    <label class="form-check-label mb-0" for="remember"> Remember me </label>
                  </div>
                  <div>
                    <router-link to="/account/password" class="small text-right"
                      >비밀번호 찾기</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="d-grid">
                <button @click.prevent="confirm" @keyup.enter="confirm" class="btn btn-primary">
                  로그인
                </button>
              </div>
            </form>

            <div class="d-flex justify-content-center align-items-center mt-4">
              <span class="fw-normal">
                아이디가 없다면?
                <router-link to="/account/register" class="fw-bold text-underline"></router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import { log } from "console";
// import { SourceTextModule } from "vm";
import { mapState, mapActions } from "vuex";
const userStore = "userStore";

// import Constant from '@/util/Contant.js';

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(userStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      //   let token = sessionStorage.getItem("access-token");

      //   console.log("1. confirm() token >> " + token);
      console.log("this.isLogin", this.isLogin);
      //
      if (this.isLogin) {
        // await this.getUserInfo(token);
        this.$router.push("/trips"); //메인 페이지로 이동
      }
    },
    movePage() {
      this.$router.push({ name: "join" }); //회원가입 페이지로 이동
    },
  },

  // methods: {

  // async loginAdmin() {
  //   try {
  //     const token = await this.adminService.loginAdmin(this.adminObj);
  //     this.$store.dispatch('setToken', token)
  //   } catch (error) {
  //     alert('로그인에 실패했습니다.');
  //     location.reload();
  //   }
  // },
  //     postlogin() {
  //         let newuser = {
  //             id: this.id,
  //             pw: this.pw,
  //         }
  //         console.log(newuser.id, newuser.pw);
  //         this.$store.dispatch(Constant.LOGIN_ACCOUNT, newuser);

  //         this.$router.push("/");
  //     }

  // }
};
</script>
<style></style>
