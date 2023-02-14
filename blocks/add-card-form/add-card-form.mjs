export default function addCardIntoDatabase() {
  let cardForm = document.querySelector('.js-cardForm');
  let cardQuestion = document.querySelector('.js-cardQuestion');
  let cardAnswer = document.querySelector('.js-cardAnswer');
  let mainCategory = document.querySelector('.js-mainCategory');
  let submitButton = document.querySelector('.js-submitButton');

  cardForm.addEventListener("submit", (elem) => {
    elem.preventDefault();
    if (isAppropriateQuestion(cardQuestion) === false) {
      cardQuestion.focus();
      alert('Question field is empty!');
      return;
    }
    if (isAppropriateAnswer(cardAnswer) === false) {
      cardAnswer.focus();
      alert('Answer field is empty!');
      return;
    }
    alert('Вы нажали на кнопку');
  })
}

function isAppropriateQuestion(questionValue) {
  return questionValue.value !== '';
}

function isAppropriateAnswer(answerValue) {
  return answerValue.value !== '';
}