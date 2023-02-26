import addCardForm from './../blocks/add-card-form/addCardForm.mjs'
import renderCards from './../blocks/single-card/renderCards.mjs'
import goToTopAndBottomButton from '../blocks/go-to-button/goToTopAndBottomButton.mjs';
import filterCards from './filter.mjs';

addCardForm()
.then(() => {
  const mainSelect = document.querySelector('select');
  mainSelect.addEventListener('change', () => {
  const formElements = document.querySelector('.js-cardForm').children;
  for (let id in formElements) {
    if (formElements[id].tagName != "DIV") {
      formElements[id].style.borderBottom = `2px solid ${mainSelect.options[mainSelect.selectedIndex].style.color}`;
    }
  }
});
})
await renderCards();
goToTopAndBottomButton();
filterCards();