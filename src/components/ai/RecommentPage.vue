<template>
  <div>
    <h1>OpenAI GPT-3.5-Turbo Vue 예제</h1>
    <div>
      <label for="user-input">사용자 입력:</label>
      <!-- <input v-model="userInput" type="text" id="user-input"> -->
      <button @click="generateResponse">요청</button>
    </div>
    <div>
      <h3>모델 응답:</h3>
      <p>{{ modelResponse }}</p>
    </div>
  </div>
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
      let basePrompt = `what is an ideal itinerary for ${this.days} days in ${this.city}? return format is markdown. 한국어로 말해줘`

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
  