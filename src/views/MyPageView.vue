<template>
  <div class="home">
    <navigation-header></navigation-header>
    <my-page></my-page>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import MyPage from "@/pages/MyPage.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";

export default {
  name: "MyPageView",
  components: {
    NavigationFooter,
    NavigationHeader,
    MyPage,
  },
};
</script>
