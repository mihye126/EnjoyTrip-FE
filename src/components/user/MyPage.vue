<template>
  <section class="section-header">
    <div class="container">
      <div class="row justify-content-center">
        <!-- 상세정보 시작-->
        <div class="col-8 card border-gray-300 p-0 p-md-4 mb-4">
          <div class="card-body">
            <h3 class="h5 mb-0">사용자 정보 수정</h3>
            <form
              action="/account/updateUserProcess"
              method="post"
              class="form mt-5"
              autocomplete="off"
            >
              <div class="mb-4">
                <label for="id">사용자 ID</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="id"
                  name="id"
                  required=""
                  v-model="user.id"
                  readonly
                />
              </div>
              <div class="mb-4">
                <label for="InfoName">사용자 이름</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="InfoName"
                  required=""
                  name="username"
                  v-model="user.user_name"
                />
              </div>
              <div class="mb-4">
                <label for="pass">email</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="pass"
                  name="pass"
                  required=""
                  v-model="user.user_email"
                  readonly
                />
              </div>
              <div class="mb-4">
                <label for="pass">전화번호</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="pass"
                  name="pass"
                  required=""
                  v-model="user.user_phone"
                />
              </div>

              <div class="form-group">
                <div class="col-md-2" style="float: left">
                  <b-button id="show-btn" @click="showModal" variant="danger" class="col-md-12">
                    탈퇴</b-button
                  >

                  <b-modal ref="my-modal" hide-footer title="회원 탈퇴">
                    <div class="d-block text-center">
                      <h3>정말로 탈퇴하시겠습니까?</h3>
                    </div>
                    <div class="text-right">
                      <b-button class="mt-2" variant="outline-warning" block @click="deleteUser"
                        >YES </b-button
                      >&nbsp;
                      <b-button class="mt-2" variant="outline-danger" block @click="hideModal"
                        >Close</b-button
                      >
                    </div>
                  </b-modal>
                </div>

                <button
                  class="btn btn-dark col-md-2"
                  @click.prevent="gotoLoginUpdate"
                  style="float: right"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
const userStore = "userStore";

export default {
  data() {
    return {
      user: {
        id: "",
        user_name: "",
        user_phone: "",
        user_email: "",
      },
      token: "",
      deleteusermodal: false,
    };
  },
  created() {
    this.setUserName(),
      this.setUserToken(),
      this.setUserID(),
      this.setUserEmail(),
      this.setUserPhone();
  },
  computed: {
    ...mapGetters(userStore, ["checkUserName"]),
    ...mapGetters(userStore, ["checkToken"]),
    ...mapGetters(userStore, ["checkUserId"]),
    ...mapGetters(userStore, ["checkUserEmail"]),
    ...mapGetters(userStore, ["checkUserPhone"]),
  },
  methods: {
    gotoLoginUpdate: async function () {
      await this.$store.dispatch("userStore/UpdateLoginUser", this.user);
      this.setUserName(),
        // this.setUserToken(),
        // this.setUserID(),
        // this.setUserEmail(),
        this.setUserPhone(),
        console.log(this.user);
    },
    deleteUser: async function () {
      await this.$store.dispatch("userStore/DeleteUser", this.user.id);
      this.$refs["my-modal"].toggle("#toggle-btn");
    },

    setUserName: function () {
      this.user.user_name = this.checkUserName;
    },
    setUserID: function () {
      this.user.id = this.checkUserId;
    },
    setUserPhone: async function () {
      this.user.user_phone = this.checkUserPhone;
    },
    setUserEmail: async function () {
      this.user.user_email = this.checkUserEmail;
    },
    setUserToken: function () {
      this.token = this.checkToken;
    },
    hideModal: function () {
      this.$refs["my-modal"].hide();
    },
    showModal: async function () {
      this.$refs["my-modal"].show();
    },
  },
};
</script>

<style></style>
