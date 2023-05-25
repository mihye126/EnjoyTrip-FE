<template>
  <main>
    <!-- Section -->
    <section
      class="min-vh-100 d-flex align-items-center section-image overlay-soft-dark"
      data-background="../../assets/img/pages/form-image.jpg"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div
              class="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-gray-300 p-4 p-lg-5 w-100 fmxw-500"
            >
              <div class="text-center text-md-center mb-4 mt-md-0">
                <h1 class="mb-0 h3">비밀번호 수정</h1>
              </div>
              <form action="" method="post">
                <!-- Form -->
                <div class="form-group mb-4" v-if="!user_email_check">
                  <label for="email">이메일</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"
                      ><span class="fas fa-envelope"></span
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="이메일을 입력하세요"
                      id="email"
                      name="email"
                      required
                      v-model="user_email"
                    />
                  </div>
                  <br />
                  <div class="d-grid">
                    <button @click.prevent="checkUserEmail" class="btn btn-primary">
                      이메일 조회
                    </button>
                  </div>
                </div>
                <!-- End of Form -->
                <div class="form-group" v-if="user_email_check">
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="newpass">새 비밀번호</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon4"
                        ><span class="fas fa-unlock-alt"></span
                      ></span>
                      <input
                        type="password"
                        placeholder="Password"
                        class="form-control"
                        id="newpass"
                        name="newpass"
                        required
                        v-model="newpw"
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
                        name="passConfirm"
                        required
                        v-model="confirmPw"
                      />
                    </div>
                  </div>
                  <div class="d-grid">
                    <button @click.prevent="modifyUserPw" class="btn btn-primary">수정 완료</button>
                  </div>
                  <!-- End of Form -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
const userStore = "userStore";

export default {
  data() {
    return {
      user_email: {},
      newpw: null,
      confirmPw: null,
      user_email_check: false,
      userid: null,
    };
  },
  computed: {
    ...mapGetters(userStore, ["checkFindByEmail"]),
    ...mapGetters(userStore, ["checkModifyUserId"]),
  },
  methods: {
    checkUserEmail: async function () {
      await this.$store.dispatch("userStore/FindByEmail", this.user_email);
      await this.setUserEmailCheck();
      await this.setUserID();
    },
    modifyUserPw: async function () {
      if (this.newpw != null && this.newpw != "" && this.newpw == this.confirmPw) {
        const request = {
          id: "",
          password: "",
        };
        request.id = this.userid;
        request.password = this.newpw;
        await this.$store.dispatch("userStore/ModifyUserPw", request);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    },
    setUserEmailCheck: function () {
      this.user_email_check = this.checkFindByEmail;
    },
    setUserID: function () {
      this.userid = this.checkModifyUserId;
    },
  },
};
</script>

<style></style>
