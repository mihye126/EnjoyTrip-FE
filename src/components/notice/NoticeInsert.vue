<template>
  <main>
    <!-- Hero -->
    <section class="section-header">
      <div class="container">
        <!-- 글 작성 시작-->
        <div class="card border-0 p-2 p-md-3 p-lg-5">
          <div class="card-header bg-white border-0 text-center">
            <h2>게시판 글 작성</h2>
          </div>
          <div class="card-body px-0 pt-0">
            <!-- <form action="/notice/insertProcess" method="post"> -->
            <div class="mb-4">
              <label for="title">제목</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="제목을 작성해주세요"
                  id="title"
                  required=""
                  name="title"
                  v-model.lazy="notice.title"
                />
              </div>
            </div>

            <div class="mb-4">
              <label for="message">내용</label>
              <textarea
                placeholder="내용을 입력해주세요"
                class="form-control"
                id="content"
                rows="10"
                required=""
                name="content"
                v-model.lazy="notice.content"
              ></textarea>
            </div>
            <div class="d-grid">
              <button class="btn rounded btn-secondary" @click="insert" @keyup.enter="insert">
                작성 완료
              </button>
            </div>
            <!-- </form> -->
          </div>
        </div>
        <!-- 글 작성 완료-->
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      notice: {
        title: "",
        content: "",
      },
    };
  },

  methods: {
    insert: async function () {
      console.log("<>", this.notice);
      await this.$store.dispatch("NoticeStore/InsertItem", this.notice);
      this.$router.push("/notice");
    },
  },
};
</script>
