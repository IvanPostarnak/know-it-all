import createSelectElementsForCategories from './createSelectElements.mjs';
import addCardIntoDatabase from './addCardIntoDatabase.mjs';

export default async function addCardForm() {
  createSelectElementsForCategories();
  
  const cardForm = document.querySelector('.js-cardForm');

  cardForm.addEventListener("submit", (elem) => {
    elem.preventDefault();

    const formData = new FormData(cardForm);
    const formObject = Object.fromEntries(formData.entries());
    const formObjectJson = JSON.stringify(formObject);

    addCardIntoDatabase(formObjectJson)
    .then(() => cardForm.reset())
    .then(() => {})
  })
}