const axios = require('axios');
require('dotenv').config();

async function callOpenAI(prompt) {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "gpt-4",
            prompt,
            max_tokens: 500
        }, {
            headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return "Error communicating with AI.";
    }
}
module.exports = { callOpenAI };