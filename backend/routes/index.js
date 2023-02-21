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
      prompt: "Can you write a 300 words (approx) review about a recent hollywood movie of your choice",
      max_tokens: 102,
      temperature: 1,
    }),
  })
  let d2 = await d1.json()
  console.log(d2);
  console.log(d2['choices'][0]['text']);
  let a1 = d2['choices'][0]['text']

  const blog1 = await Blog.create({title: a1.split('\n')[0] , text:  a1 });
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

router.get('/blogs', async function(req, res, next) {
  //call open ai


    //save to db
    const blog1 = await Blog.find();


  res.json(blog1)
  // res.json(d2['choices'][0]['text'])
});



router.post('/question', async function(req, res, next) {
  //call open ai
  let d1 = await  fetch("https://api.openai.com/v1/completions", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "Can you write an easy random mathematics numerical challenge for me with answers in one number after Answer :",
      max_tokens: 102,
      temperature: 1,
    }),
  })
  let d2 = await d1.json()
  console.log(d2);
  // console.log(d2['choices'][0]['text']);

//questionnaire
  let searchString = "Answer";
  let index = d2.choices[0].text.indexOf(searchString);
  if (index !== -1) {
    let valueAfterSearchString2 = d2.choices[0].text.substring(0,index);
    
    // setContent(valueAfterSearchString2)

    let valueAfterSearchString = d2.choices[0].text.substring(index + searchString.length + 1);
    // setAnswer(valueAfterSearchString)
    // console.log(valueAfterSearchString); // Output: "fox jumps over the lazy dog"

    //save to db
    const blog1 = await Questionnaire.create({question: valueAfterSearchString2, answer:  valueAfterSearchString });

  }

  res.json("success")
  // res.json(d2['choices'][0]['text'])
});

module.exports = router;
