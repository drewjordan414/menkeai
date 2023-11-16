// dotenv
require("dotenv").config();

// setup express
const express = require("express");
const app = express();
const port = 4000;

// setup openai
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

// adding body-parser and cors
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "gpt-4-1106-preview",
        prompt: message,
        max_tokens: 3000,
        temperature: 0.3,
    });
    res.json({ botResponse: response.data.choices[0].text });
});




// require("dotenv").config();

// const express = require("express");
// const app = express();
// const port = 4000;

// const { Configuration, OpenAIApi } = require('openai');
// const configuration = new Configuration({
//   apiKey: process.env.API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // adding body-parser and cors
// const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/", async (req, res) => {
//   const { message } = req.body;
//   const response = await openai.createCompletion({
//     model: "gpt-4-1106-preview",
//     prompt: message,
//     max_tokens: 3000,
//     temperature: 0.3,
//   });
//   res.json({ botResponse: response.data.choices[0].text });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
