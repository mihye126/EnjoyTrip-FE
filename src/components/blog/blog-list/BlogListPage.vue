<template>
  <main>
    <!-- Hero -->
    <section class="section-header pb-9 pb-lg-10 mb-4 mb-lg-6 bg-primary text-white">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-7">
            <h1 class="display-1 font-weight-extreme mb-4">Share Your Experience</h1>
            <p class="lead mb-4 mb-lg-5 me-lg-5">당신만의 특별한 경험을 공유하세요!</p>
            <router-link
              v-if="this.userId != null && this.userId != ''"
              class="btn btn-warning"
              to="/blogs/new"
              >post<i class="fa-solid fa-plus ms-2"></i
            ></router-link>
          </div>
          <div class="col-12 col-md-5 d-none d-lg-block text-center">
            <img :src="img" alt="girl meditating" />
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg line-bottom-light">
      <div class="container mt-n10 mt-lg-n12 z-2">
        <div class="row" v-if="blogs.length">
          <div
            class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5"
            v-for="(blog, index) in blogs"
            :key="index"
          >
            <blog-item :item="blog"></blog-item>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BlogItem from "./BlogItem.vue";
import { mapGetters } from "vuex";
const userStore = "userStore";
export default {
  components: {
    BlogItem,
  },
  data() {
    return {
      userId: null,
      blogs: [],
      img: require("@/assets/img/illustrations/meditating.svg"),
    };
  },
  async created() {
    await this.list();
    this.blogs = this.$store.state.BlogStore.posts;
    await this.setUserID();
    console.log("blogs", this.blogs, this.userId);
  },
  computed: { ...mapGetters(userStore, ["checkUserId"]) },

  methods: {
    list: async function () {
      await this.$store.dispatch("BlogStore/BlogList"); // 스토어의 액션을 호출합니다.
    },
    setUserID: function () {
      this.userId = this.checkUserId;
    },
  },
};
</script>
