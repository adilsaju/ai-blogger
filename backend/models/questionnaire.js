const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true,
  }
});

const Questionnaire = mongoose.model('questionnaire', questionnaireSchema);

module.exports = Questionnaire;
