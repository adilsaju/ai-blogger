const config = require('../../src/config.json')
var express = require('express');
var router = express.Router();
const Blog = require('../models/blog');
const Questionnaire = require('../models/questionnaire');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/blog', async function(req, res, next) {
  //call open ai
  let d1 = await  fetch("https://api.openai.com/v1/completions", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "ad for painter",
      max_tokens: 102,
      temperature: 0,
    }),
  })
  let d2 = await d1.json()
  console.log(d2);
  console.log(d2['choices'][0]['text']);
  let a1 = d2['choices'][0]['text']

  const blog1 = await Blog.create({title: "adil", text:  a1 });
  blog1.save()


  res.json("success")
  // res.json(d2['choices'][0]['text'])
});

router.get('/questions', async function(req, res, next) {
  //call open ai


    //save to db
    const blog1 = await Questionnaire.find();


  res.json(blog1)
  // res.json(d2['choices'][0]['text'])
});




module.exports = router;
