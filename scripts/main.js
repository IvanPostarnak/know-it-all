import addCardForm from './../blocks/add-card-form/addCardForm.mjs'
import renderCards from './../blocks/single-card/renderCards.mjs'
import goToTopAndBottomButton from '../blocks/go-to-button/goToTopAndBottomButton.mjs';
import filterCards from './filter.mjs';

addCardForm();
await renderCards();
goToTopAndBottomButton();
filterCards();