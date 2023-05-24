<template>
  <!-- Hero -->
  <section class="section-header">
    <div class="container">
      <!-- 게시판 시작-->

      <div class="row justify-content-center">
        <div class="col col-md-10">
          <h2>공지사항 목록</h2>
          <hr />
          <div v-if="this.$store.state.userStore.isAdmin === true">
            <router-link to="/notice/insert">
              <button type="button" class="btn btn-success me-1">글쓰기</button>
            </router-link>
          </div>
          <br /><br />
          <div class="accordion bg-white rounded" id="notice-list">
            <NoticeItem v-for="notice in notices" :key="notice.id" :notice="notice"></NoticeItem>
          </div>
        </div>
      </div>
      <!-- 게시판 끝-->
    </div>
  </section>
  <!-- Hero -->
</template>

<script>
// import router from "@/router";
import NoticeItem from "./NoticeItem";
export default {
  components: {
    NoticeItem,
    // router,
  },
  data() {
    return {
      notices: [],
      page: 0,
    };
  },
  created() {
    this.setNotice();
    console.log(this.notice);
  },
  methods: {
    setNotice: async function () {
      await this.$store.dispatch("NoticeStore/NoticeList", this.page);
      console.log("확인 ", this.$store.state.NoticeStore.notice);
      this.notices = this.$store.state.NoticeStore.notice;
    },
  },
};
</script>
