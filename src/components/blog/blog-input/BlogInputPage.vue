<template>
  <main>
    <section class="section-header pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <h1 class="mb-3">나만의 핫플레이스를 입력해보세요!</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg pt-6">
      <div class="container">
        <div class="row justify-content-center mb-5 mb-lg-6">
          <div class="col-lg-9 mb-5">
            <label for="name">제목</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="제목을 입력해주세요"
                id="title"
                required=""
                name="title"
                v-model="title"
              />
            </div>
          </div>
          <tiptap-editor
            class="col-lg-9 p-0"
            :active-buttons="[
              'bold',
              'italic',
              'strike',
              'underline',
              'code',
              'h1',
              'h2',
              'h3',
              'bulletList',
              'orderedList',
              'blockquote',
              'codeBlock',
              'horizontalRule',
              'undo',
              'redo',
            ]"
            :initialContent="content"
            :isEdit="false"
            v-on:update="handleUpdate"
          />
          <div class="row col-lg-9">
            <div class="col-6 mb-4 text-start">
              <button class="btn rounded btn-danger">취소</button>
            </div>
            <div class="col-6 mb-4 text-end">
              <button class="btn rounded btn-secondary" @click="updateBlog">저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
const userStore = "userStore";
import TiptapEditor from "@/components/editor/TiptapEditor.vue";
export default {
  components: {
    TiptapEditor,
  },
  data() {
    return {
      userId: null,
      userName: null,
      editor: null,
      title: "",
      content:""
    };
  },
  async created() {
    await this.setUserName();
    await this.setUserID();
  },
  computed: {
    ...mapGetters(userStore, ["checkUserId"]),
    ...mapGetters(userStore, ["checkUserName"]),
  },

  methods: {
    updateBlog() {
      //서버로 blog 데이터 보내기
      const blog={
        content:JSON.stringify(this.content),
        title:this.title,
        userId:this.userId,
        userName:this.userName
      }
      console.log(blog)
      this.$store.dispatch("BlogStore/InsertPost",blog)
      this.$router.push("/blogs")
    },
    handleUpdate:function(json){
        this.content=json
    },
    setUserID: function () {
      this.userId = this.checkUserId;
    },
    setUserName: function () {
      this.userName = this.checkUserName;
    },
  },
};
</script>
