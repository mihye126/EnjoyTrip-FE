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
              <form action="/account/registerProcess" method="post">
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
                      v-model="user.name"
                      required
                    />
                  </div>
                </div>
                <!-- Form -->
                <div class="form-group mb-4">
                  <label for="id">아이디</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"
                      ><span class="fas fa-envelope"></span
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="example"
                      id="id"
                      name="id"
                      v-model="user.id"
                      required
                    />
                  </div>
                </div>
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
                      v-model="user.email"
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
                        v-model="user.pw"
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
                  <button @click="register" class="btn btn-primary">회원가입</button>
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
        id: "",
        pw: "",
        name: "",
        phone: "",
        email: "",
        token: null,
        admin_check: false,
      },
      pwConfirm: "",
    };
  },
  methods: {
    register: async function () {
      console.log(this.user);
      await this.$store.dispatch("userStore/RegisterUser", this.user);
      this.$router.push("/");
    },
    login: function () {
      this.$router.push("/login");
    },
  },
};
</script>
