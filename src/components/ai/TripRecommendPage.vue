<template>
  <main>
    <section class="section-header pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <h1 class="mb-3">어디로 떠날까요?</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="section section-md pt-4 mt-3">
      <div class="container">
          <form class="row mb-4 mb-lg-5 pt-2" action="" method="get">
    <div class="col-5">
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-text">   <label class="my-1 me-2">days</label> <i class="fa-solid fa-calendar-days"></i></span>
          <select
            class="form-select"
            id="search-area"
            aria-label="검색 할 지역 선택"
            name="sidoCode"
            v-model="days"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>

          </select>
        </div>
      </div>
    </div>

    <div class="col-5">
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-text" id="basic-addonDate1">
            <label class="my-1 me-2">city</label>  <i class="fa-solid fa-location-dot"></i>          
          </span>
          <input
            class="form-control"
            id="search-city"
            aria-label="검색 할 지역 선택"
            name="city"
            v-model="city"
          />
            
        </div>
      </div>
    </div>

    <div class="col-2">
      <button class="btn btn-warning" id="btn-search" @click.prevent="run" style="width: 100%">
        Search <i class="fa-solid fa-magnifying-glass m-1" style="float: left"></i>
      </button>
    </div>
  </form>
        <div class="row mb-4 mb-lg-5">

          <tiptap-editor
            class="col-lg-9 p-0"
            :active-buttons="[]"
            :initialContent="modelResponse"
            :editable="false"
            :border="false"
            :isJson="false"
          />      
        </div>

      </div>
    </div>

  </main>
</template>
  
<script>
import {
  createCompletion,
  createClient
} from '@/api/chatgpt.js';
import TiptapEditor from '../editor/TiptapEditor.vue';

export default {
  components: {
    TiptapEditor
  },
  data() {
    return {
      modelResponse: '',
      days: 1,
      city: "서울"
    };
  },
  methods: {
    run: async function () {
      const client = createClient();
      console.log(this.days, this.city)

      try {
        await createCompletion(client)({ days: this.days, city: this.city })
          .then(response => this.modelResponse = response);
      } catch (err) {
        console.log("error", err)
      }
    }
  }
};
</script>
  