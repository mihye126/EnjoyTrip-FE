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
                           
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </section>

    <div>
      <label for="days">days:</label>
      <input v-model="days" type="text" id="days">
      <label for="city">city:</label>
      <input v-model="city" type="text" id="city">
      <button @click="generateResponse">요청</button>
    </div>
    <div>
      <h3>모델 응답:</h3>
      {{ modelResponse }}
    </div>
  </main>
</template>
  
<script>
const { Configuration, OpenAIApi } = require("openai");
const GPT_KEY = process.env.GPT_API_KEY

const configuration = new Configuration({
  apiKey: GPT_KEY,
});

const openai = new OpenAIApi(configuration);
const role = `I want you to act as a travel guide. I will write you my city and you will suggest a place to visit near my city . In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location.`

export default {
  data() {
    return {
      modelResponse: '',
      days:'',
      city:''
    };
  },
  methods: {
    async generateResponse() {
      let basePrompt = `what is an ideal itinerary for ${this.days} days in ${this.city}? return format is html. 한국어로 말해줘`

      try {
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: role },
            { role: "user", content: basePrompt }
          ],
        });

        this.modelResponse=response["data"]["choices"][0]["message"]["content"]

      } catch (err) {
        console.log('error: ', err)
      }


    }
  }
};
</script>
  