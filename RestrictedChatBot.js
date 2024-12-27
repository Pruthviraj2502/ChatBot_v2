const axios = require('axios');

// Llama API configuration
const api_key = "SG_d7fc1233533e6d91";
const url = "https://api.segmind.com/v1/llama-v3-8b-instruct";

// Predefined keywords/categories related to job portal
const allowedTopics = [
  "job",
  "application",
  "resume",
  "cover letter",
  "interview",
  "vacancy",
  "computer science roles",
  "tech industry",
  "skills",
  "salary",
  "job portal",
  "hiring process","react"
];

// Function to check query relevance
function isQueryRelevant(query) {
  return allowedTopics.some((topic) => query.toLowerCase().includes(topic));
}

// Chatbot logic
const userQuery = "what are points should i incude for react developer"; // Example user query

(async function() {
    if (!isQueryRelevant(userQuery)) {
        console.log("I am sorry, I can only assist with queries related to the job portal.");
        return;
    }

    const data = {
        "messages": [
            {
                "role": "user",
                "content": userQuery
            },
        ]
    };

    try {
        const response = await axios.post(url, data, { headers: { 'x-api-key': api_key } });
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
})();
