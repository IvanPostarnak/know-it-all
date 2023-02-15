import createSelectElementsForCategories from './createSelectElements.mjs';
import addCardIntoDatabase from './addCardIntoDatabase.mjs';

export default function addCardForm() {
  createSelectElementsForCategories();
  
  const cardForm = document.querySelector('.js-cardForm');

  cardForm.addEventListener("submit", (elem) => {
    elem.preventDefault();

    const formData = new FormData(cardForm);
    const formObject = Object.fromEntries(formData.entries());
    const formObjectJson = JSON.stringify(formObject);

    console.log(formObjectJson);
    addCardIntoDatabase(formObjectJson).then((data) => console.log(data));
  })
}


async function validateResponse(response) {
  try {
    if (response.ok === false) throw new Error(`User Error: ${response.status}`);
  } catch (error) {
    console.log(error.message);
  }
}