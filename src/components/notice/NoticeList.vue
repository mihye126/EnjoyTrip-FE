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
              <button type="button" class="btn btn-success me-1" @click="insertNotice">
                글쓰기
              </button>
            </router-link>
          </div>
          <br /><br />
          <div class="accordion bg-white rounded" id="notice-list">
            <NoticeItem
              v-for="notice in notices"
              :key="notice.id"
              :notice="notice"
              @moving="moveToPage"
            ></NoticeItem>
          </div>
        </div>
        <div style="display: flex; justify-content: center">
          <b-button-toolbar key-nav aria-label="Toolbar with button groups">
            <b-button-group class="mx-1">
              <b-button @click="gotoFrist">&laquo;</b-button>
              <b-button @click="down">&lsaquo;</b-button>
            </b-button-group>
            <b-button-group class="mx-1">
              <b-button>{{ this.page }}</b-button>
            </b-button-group>
            <b-button-group class="mx-1">
              <b-button @click="up">&rsaquo;</b-button>
              <b-button @click="gotoEndPage">&raquo;</b-button>
            </b-button-group>
          </b-button-toolbar>
        </div>
      </div>
      <!-- 게시판 끝-->
    </div>
  </section>
  <!-- Hero -->
</template>

<script>
import NoticeItem from "./NoticeItem";
export default {
  components: {
    NoticeItem,
  },
  data() {
    return {
      notices: [],
      page: 1,
      endpage: 0,
    };
  },
  created() {
    this.setNotice();
    console.log(this.notice);
  },
  methods: {
    setNotice: async function () {
      await this.$store.dispatch("NoticeStore/NoticeList", this.page);
      this.notices = this.$store.state.NoticeStore.notice;
      await this.$store.dispatch("NoticeStore/EndPageNum");
      this.endpage = this.$store.state.NoticeStore.endPage;
    },
    down: function () {
      if (this.page > 1) {
        this.page--;
        this.moveToPage();
      }
    },
    up: function () {
      if (this.endpage > this.page) {
        this.page++;
        this.moveToPage();
      }
    },
    gotoFrist: function () {
      this.page = 1;
      this.moveToPage();
    },
    gotoEndPage: function () {
      this.page = this.endpage;
      this.moveToPage();
    },
    moveToPage: async function () {
      console.log("되니 ", this.page);
      await this.$store.dispatch("NoticeStore/NoticeList", this.page);
      this.notices = this.$store.state.NoticeStore.notice;
    },
    insertNotice: function () {
      this.$router.push("/notice/insert");
    },
  },
};
</script>
