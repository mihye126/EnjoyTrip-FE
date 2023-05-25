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

    <section class="section section-lg pt-6">
      <div class="container">
        <div class="row justify-content-center mb-5 mb-lg-6">
          <div class="col-12 col-lg-8">
            <div class="card border-0 p-2 p-md-3 p-lg-5">
              <div class="card-body px-0 pt-0">
                <div>
                  <label for="days">days:</label>
                  <input v-model="days" type="text" id="days">
                  <label for="city">city:</label>
                  <input v-model="city" type="text" id="city">
                  <button @click="run">요청</button>
                </div>
                <div>
                  <h3>모델 응답:</h3>
                  <textarea type="text" id="modelResponse" :value="modelResponse"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
</template>
  
<script>
import {
  createCompletion,
  createClient
} from '@/api/chatgpt.js';

export default {
  data() {
    return {
      modelResponse: '',
      days: 0,
      city: ""
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
  