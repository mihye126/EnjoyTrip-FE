<template>
  <div>
    <!-- Section -->
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
                <h1 class="mb-0 h3">회원가입</h1>
              </div>
              <form action="" method="post">
                <div class="form-group mb-4">
                  <label for="name">이름</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon2"
                      ><span class="fas fa-envelope"></span
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="홍길동"
                      id="name"
                      name="name"
                      v-model="user.user_name"
                      required
                    />
                  </div>
                </div>
                <!-- Form -->
                <div class="form-group mb-4">
                  <label for="email">이메일</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"
                      ><span class="fas fa-envelope"></span
                    ></span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="example@gmail.com"
                      id="email"
                      name="email"
                      v-model="user.user_email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mb-4">
                  <label for="email">휴대전화번호</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"
                      ><span class="fas fa-envelope"></span
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="010-0000-0000"
                      id="phone"
                      name="phone"
                      v-model="user.user_phone"
                      required
                    />
                  </div>
                </div>
                <!-- End of Form -->
                <div class="form-group">
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="password">비밀번호</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon4"
                        ><span class="fas fa-unlock-alt"></span
                      ></span>
                      <input
                        type="password"
                        placeholder="Password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="user.user_pw"
                        required
                      />
                    </div>
                  </div>
                  <!-- End of Form -->
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="password_confirm">비밀번호 확인</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon5"
                        ><span class="fas fa-unlock-alt"></span
                      ></span>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        class="form-control"
                        id="password_confirm"
                        name="passwordConfirm"
                        v-model="pwConfirm"
                        required
                      />
                    </div>
                  </div>
                  <!-- End of Form -->
                </div>
                <div class="d-grid">
                  <button @click.prevent="register" class="btn btn-primary">회원가입</button>
                </div>
              </form>

              <div class="d-flex justify-content-center align-items-center mt-4">
                <span class="fw-normal">
                  이미 계정이 있다면?
                  <button class="fw-bold text-underline" @click="login">로그인</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        user_pw: "",
        user_name: "",
        user_phone: "",
        user_email: "",
        token: null,
        admin_check: 0,
      },
      pwConfirm: "",
    };
  },
  methods: {
    register: async function () {
      console.log(this.user);
      if (this.samepassword()) {
        await this.$store.dispatch("userStore/RegisterUser", this.user);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    },
    login: function () {
      this.$router.push("/login");
    },
    samepassword: function () {
      if (this.pwConfirm == this.user.user_pw) {
        return true;
      } else return false;
    },
  },
};
</script>
