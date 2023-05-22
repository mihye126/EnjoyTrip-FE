<template>
    <main>
        <section class="section-header pb-5">
    <div class="container">
        <div class="row bg-img card text-white">
            <div class="col-12 mt-5 ">
                <div class=" mb-6">
                    <div class="card-body px-5 py-5 text-center">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="mb-3">{{blog.title}}</h2>
                            </div>
                            <div class="post-meta"><span class="fw-bold me-3">작성자: {{blog.userName}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  
      <section class="section section-lg pt-2">
        <div class="container">
          <div class="row justify-content-center mb-2 mb-lg-6">

            <tiptap-editor class="col-lg-9 p-0" :active-buttons="[]" 
            :initialContent="blog.content"
            :editable="false"
            :border="false"
            />

            <div class="row justify-content-sm-center align-items-center py-3">
    <div class="col-12 col-lg-9">
        <div class="row">
            <div class="col-9 col-md-6">
                <h6 class="fw-bolder d-inline mb-0 me-3">Share:</h6><button
                    class="btn btn-sm me-2 btn-icon-only btn-pill btn-twitter d-inline text-white"
                    aria-label="twitter social link"><span class="fab fa-twitter"></span></button>
                <button class="btn btn-sm me-2 btn-icon-only btn-pill btn-facebook d-inline"
                        aria-label="facebook social link"><span class="fab fa-facebook-f"></span></button>
                <button class="btn btn-sm btn-icon-only btn-pill bg-orange d-inline text-white"
                        aria-label="reddit social link"><span class="fab fa-reddit-alien"></span></button>
            </div>
            <div class="col-3 col-md-6 text-right">
                
                <button class="btn btn-sm me-2 btn-icon-only btn-pill d-inline btn-danger"
                        aria-label="edit"> <i class="fa-solid fa-pen"></i></button></div>
        </div>
    </div>
    <div class="col-12 col-lg-9">
        <utterances-comment/>
    </div>
</div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import TiptapEditor from "@/components/editor/TiptapEditor.vue"
  import UtterancesComment from '../../board/UtterancesComment.vue';

  export default {
    components: {
      TiptapEditor,
      UtterancesComment
    },
    data() {
      return {
        editor: null,
        blog:{
            title:"테스트",
            userName:"김싸피",
            content:" 크크크루삥뽕"
        }
    }
    },methods:{
      updateBlog(){
        //서버로 blog 데이터 보내기
      }
    }
  };
  </script>
  
  