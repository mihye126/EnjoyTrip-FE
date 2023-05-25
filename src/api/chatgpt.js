// const { Configuration, OpenAIApi } = require("openai");
const GPT_KEY = process.env.VUE_APP_GPT_API_KEY
import axios from 'axios';

const role = `I want you to act as a travel guide. I will write you my city and you will suggest a place to visit near my city . In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location.`;


const createClient = () => axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    Authorization: `Bearer ${GPT_KEY}`,
  },
});

const createCompletion = (client) => async ({
  days,city
}) => {
    let basePrompt = `what is an ideal itinerary for ${days} days in ${city}? return format is html. 한국어로 말해줘`
    const res=await client.post('/v1/chat/completions', {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: "system", content: role },
    { role: "user", content: basePrompt }
  ],

})
console.log(res)
return res["data"]["choices"][0]["message"]["content"]

};

export {
  createClient,
  createCompletion,
};