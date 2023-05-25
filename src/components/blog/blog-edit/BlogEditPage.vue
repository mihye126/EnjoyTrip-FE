<template>
    <main>
      <section class="section-header pb-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 text-center">
              <h1 class="mb-3">나만의 핫플레이스를
                입력해보세요!</h1>
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
                <input type="text" class="form-control" placeholder="제목을 입력해주세요" id="title" required name="title" v-model="blog.title">
              </div>
            </div>
            <tiptap-editor class="col-lg-9 p-0" :active-buttons="[
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
            :initialContent="blog.content"
            :isJson="true"
            v-on:update="handleUpdate"
            />
            <div class="row col-lg-9">
              <div class="col-6 mb-4 text-start">
            <button class="btn rounded btn-danger" @click="back">취소</button>
  </div>
                      <div class="col-6 mb-4 text-end">
            <button class="btn rounded btn-secondary" @click="update">저장하기</button>
  </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import TiptapEditor from "@/components/editor/TiptapEditor.vue"
  export default {
    components: {
      TiptapEditor,
    },
    data() {
      return {
        editor: null,
        blog:{},
      }
    },created(){
    this.read(),
    this.blog=this.$store.state.BlogStore.post
  },methods:{
    handleUpdate:function(json){
        this.blog.content=JSON.stringify(json);
    },
      update: async function(){
        console.log("update",this.blog)
        await this.$store.dispatch("BlogStore/ModifyPost", this.blog); // 스토어의 액션을 호출합니다.
        this.read(),
        this.$router.push(`/blogs/${this.$route.params.id}`)
      },
      back: async function(){
        this.read(),
        this.$router.push(`/blogs/${this.$route.params.id}`)
      },
      read: async function(){
          const id = this.$route.params.id; // id를 가져오기 위해 $route.params.id를 사용합니다.
          await this.$store.dispatch("BlogStore/BlogRead",id); // 스토어의 액션을 호출합니다.
        
        }
    }
  };
  </script>
  
  