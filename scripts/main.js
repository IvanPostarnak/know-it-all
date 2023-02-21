import bubbleGlide from './../blocks/bubble/bubble.mjs'
import addCardForm from './../blocks/add-card-form/addCardForm.mjs'
import renderCards from './../blocks/single-card/renderCards.mjs'
import goToTopAndBottomButton from './goToTopAndBottomButton.mjs';

bubbleGlide();
addCardForm();
await renderCards();
goToTopAndBottomButton();