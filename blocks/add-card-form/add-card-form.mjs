export default function addCardIntoDatabase() {
  let cardForm = document.querySelector('.js-cardForm');
  let cardQuestion = document.querySelector('.js-cardQuestion');
  let cardAnswer = document.querySelector('.js-cardAnswer');
  let mainCategory = document.querySelector('.js-mainCategory');
  let submitButton = document.querySelector('.js-submitButton');

  cardForm.addEventListener("submit", (elem) => {
    elem.preventDefault();
    alert('Вы нажали на кнопку');
  })
}