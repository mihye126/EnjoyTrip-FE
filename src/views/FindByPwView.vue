<template>
  <div class="home">
    <navigation-header></navigation-header>
    <FindPw></FindPw>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import FindPw from "@/components/user/FindPw.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";

export default {
  name: "FindByPwView",
  components: {
    NavigationFooter,
    NavigationHeader,
    FindPw,
  },
};
</script>
