<template>
  <header class="header-global">
    <nav
      id="navbar-main"
      aria-label="navigation"
      class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-dark bg-primary"
    >
      <div class="container position-relative">
        <router-link class="navbar-brand me-lg-5" to="/">
          <div>
            <img class="navbar-brand-dark" :src="lightLogo" alt="Logo light" />
            <img class="navbar-brand-light" :src="darkLogo" alt="Logo dark" />
          </div>
        </router-link>
        <div class="navbar-collapse collapse me-auto" id="navbar_global">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <router-link to="/trips">
                  <img :src="darkLogo" alt="Themesberg logo" />
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
              <router-link to="/notice" class="nav-link">Notice</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/trips" class="nav-link">Trips</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blogs" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recommend" class="nav-link icon-lg"> <i class="fa-solid fa-robot"></i></router-link>
            </li>

          </ul>
        </div>
        <div class="d-flex align-items-center">
          <div v-if="token == false">
            <router-link
              to="/login"
              @click="loginCurrentRoutecheck"
              class="btn btn-outline-gray-100 d-none d-lg-inline me-md-3"
            >
              Sign In</router-link
            >
            <router-link to="/register" @click="registerCurrentRoutecheck" class="btn btn-tertiary">
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
            <button
              @click.prevent="mypage"
              class="btn btn-outline-gray-100 d-none d-lg-inline me-md-3"
            >
              {{ userName }}님 유저정보 바로가기
            </button>
            <button class="btn btn-tertiary" @click="logout">
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
import { mapGetters } from "vuex";
const userStore = "userStore";
export default {
  data() {
    return {
      userName: "",
      userId: "",
      token: "",
      lightLogo:require("@/assets/img/brand/light.svg"),
      darkLogo:require("@/assets/img/brand/dark.svg")

    };
  },
  created() {
    this.setUserName(), this.setUserToken(), this.setUserID();
  },
  watch: {
    checkToken() {
      this.setUserToken();
    },
  },
  computed: {
    ...mapGetters(userStore, ["checkUserName"]),
    ...mapGetters(userStore, ["checkToken"]),
    ...mapGetters(userStore, ["checkUserId"]),
  },
  methods: {
    setUserName: function () {
      this.userName = this.checkUserName;
    },
    setUserToken: function () {
      this.token = this.checkToken;
    },
    setUserID: function () {
      this.userId = this.checkUserId;
    },
    logout: async function () {
      await this.$store.dispatch("userStore/userLogout", this.userId);
      this.$router.push("/").catch(() => {});
    },
    mypage: async function () {
      this.$router.push("/mypage").catch(() => {});
    },
    loginCurrentRoutecheck() {
      if (this.$route.path === "/login") {
        return false; // 링크를 막음
      }
    },
    registerCurrentRoutecheck() {
      if (this.$route.path === "/register") {
        return false; // 링크를 막음
      }
    },
  },
};
</script>
<style></style>
