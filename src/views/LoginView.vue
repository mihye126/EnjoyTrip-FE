<template>
  <div class="home">
    <navigation-header></navigation-header>
    <login-page></login-page>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import LoginPage from "@/components/login/LoginPage.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";

export default {
  name: "LoginView",
  components: {
    NavigationFooter,
    NavigationHeader,
    LoginPage,
  },
};
</script>
