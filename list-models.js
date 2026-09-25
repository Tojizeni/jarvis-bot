const { OpenAI } = require('openai');

const ai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

async function main() {
  const models = await ai.models.list();
  const free = models.data.filter(m => m.id.includes(':free'));
  console.log("=== YE FREE MODELS ABHI AVAILABLE HAIN ===");
  free.forEach(m => console.log(m.id));
}

main().catch(e => console.log("Error:", e.message));