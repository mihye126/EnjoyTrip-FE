<template>
  <header class="header-global">
    <nav
      id="navbar-main"
      aria-label="navigation"
      class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-dark bg-primary"
    >
      <div class="container position-relative">
        <router-link class="navbar-brand me-lg-5" to="/trips">
          <div>
            <img class="navbar-brand-dark" src="/assets/img/brand/light.svg" alt="Logo light" />
            <img class="navbar-brand-light" src="/assets/img/brand/dark.svg" alt="Logo dark" />
          </div>
        </router-link>
        <div class="navbar-collapse collapse me-auto" id="navbar_global">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <router-link to="/trips">
                  <img src="/assets/img/brand/dark.svg" alt="Themesberg logo" />
                </router-link>
              </div>
              <div class="col-6 collapse-close">
                <a
                  href="#navbar_global"
                  class="fas fa-times"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar_global"
                  aria-controls="navbar_global"
                  aria-expanded="false"
                  title="close"
                  aria-label="Toggle navigation"
                ></a>
              </div>
            </div>
          </div>
          <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li class="nav-item">
              <router-link to="/notice/list" class="nav-link">Notice</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/trip/list" class="nav-link">Trips</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/hotPlace/list" class="nav-link">Blog</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <div v-if="token == false">
            <router-link
              to="/login"
              target="_blank"
              class="btn btn-outline-gray-100 d-none d-lg-inline me-md-3"
            >
              Sign In</router-link
            >
            <router-link to="/register" target="_blank" class="btn btn-tertiary">
              <i class="fa-solid fa-right-to-bracket"></i> Sign Up
            </router-link>
            <button
              class="navbar-toggler ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div v-else>
            <router-link
              to="/info"
              target="_blank"
              class="btn btn-outline-gray-100 d-none d-lg-inline me-md-3"
            >
              {{ user_info }}님 유저정보 바로가기</router-link
            >
<<<<<<< HEAD
            <router-link
              to="/account/logout"
              target="_blank"
              class="btn btn-tertiary"
              @click.prevent="logout"
            >
=======
            <button class="btn btn-tertiary" @click="logout">
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
              <i class="fa-solid fa-right-to-bracket"></i> Sign Out
            </button>
            <!--창 사이즈 줄어들었을 때 메뉴나오게 하는 버튼-->
            <button
              class="navbar-toggler ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click.prevent="logout"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import hppt from "@/router";
import { mapGetters } from "vuex";
const userStore = "userStore";
// import { store } from "@/store/modules/userStore";
export default {
  data() {
    return {
      user_info: "",
      user_Id: "",
      token: "",
    };
  },
  created() {
    this.setUserInfo(), this.setUserToken(), this.setUserID();
  },
  computed: {
    ...mapGetters(userStore, ["checkUserInfo"]),
    ...mapGetters(userStore, ["checkToken"]),
    ...mapGetters(userStore, ["checkUserId"]),

    // this.user_info = store.checkUserInfo;
  },
  methods: {
    setUserInfo: function () {
      this.user_info = this.checkUserInfo;
    },
    setUserToken: function () {
      this.token = this.checkToken;
    },
    setUserID: function () {
      this.user_Id = this.checkUserId;
    },
    logout: async function () {
      await this.$store.dispatch("userStore/userLogout", this.user_Id);
      this.$router.push("/");
    },
    logout: function () {
      console.log("!!!!!");
    },
  },
};

// export default { components: { router } };
</script>
<style></style>
