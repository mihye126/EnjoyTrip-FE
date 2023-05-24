<template>
  <div class="home">
    <navigation-header></navigation-header>
    <NoticeInsert></NoticeInsert>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
import NoticeInsert from "@/components/notice/NoticeInsert.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
export default {
  name: "NoticeListView",
  components: {
    NoticeInsert,
    NavigationFooter,
    NavigationHeader,
  },
};
</script>
