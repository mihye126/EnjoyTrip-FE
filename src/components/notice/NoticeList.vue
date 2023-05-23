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
            <!-- <c:forEach items="${notices}" var="notice">
                <jsp:include page="/views/components/notice/notice-item.jsp">
                  <jsp:param name="title" value="${notice.title}" />
                  <jsp:param name="content" value="${notice.content}" />
                  <jsp:param name="num" value="${notice.id}" />
                </jsp:include>
              </c:forEach> -->
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
    };
  },
  created() {
    this.setNotice();
    console.log(this.notice);
  },
  methods: {
    setNotice: function () {
      // console.log("!!", this.$store.state.NoticeStore.notice);
      // console.log("@@", this.$store.state.userStore.isAdmin);
      this.notices = this.$store.state.NoticeStore.notice;
      this.$store.dispatch("NoticeStore/NoticeList");
    },
  },
};
</script>
