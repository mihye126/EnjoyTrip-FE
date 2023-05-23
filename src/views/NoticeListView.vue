<template>
  <div class="home">
    <navigation-header></navigation-header>
    <notice-list></notice-list>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
import NoticeList from "@/components/notice/NoticeList.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
export default {
  name: "NoticeListView",
  components: {
    NoticeList,
    NavigationFooter,
    NavigationHeader,
  },
};
</script>
