<template>
  <div class="home">
    <navigation-header></navigation-header>
    <RegisterUser></RegisterUser>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import RegisterUser from "@/components/user/RegisterUser.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";

export default {
  name: "UserRegisterView",
  components: {
    NavigationFooter,
    NavigationHeader,
    RegisterUser,
  },
};
</script>
