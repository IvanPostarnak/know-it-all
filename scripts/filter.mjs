import getMetaOfDatabase from "./getMetaOfDatabase.mjs";
import createSelectElementsOfFilter from "./createSelectElementsOfFilter.mjs";
import isAppropriateCard from "./isAppropriateCard.mjs";

export default async function filterCards() {

  let metaObject = await getMetaOfDatabase();
  await createSelectElementsOfFilter(metaObject['categories']);

  let cardsHolder = document.querySelector('.js-cards-holder');
  let shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
  let trashbox = document.querySelector('.js-trash-box');
  let hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
  // console.log(shownArrayOfCards);
  // console.log(hiddenCards);

  const defaultCardsCheckbox = document.querySelector('.js-default-type');
  const usersCardsCheckbox = document.querySelector('.js-users-type');
  const selectCategoryFilter = document.querySelector('.js-category-filter');

  defaultCardsCheckbox.addEventListener('change', () => {
    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);
      
    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  })

  usersCardsCheckbox.addEventListener('change', () => {
    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);

    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  })

  selectCategoryFilter.addEventListener('change', () => {

    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);

    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  });

  const resetButton = document.querySelector('.js-reset-filter-button');

  resetButton.addEventListener('click', () => {
    defaultCardsCheckbox.checked = "true";
    usersCardsCheckbox.checked = "true";
    selectCategoryFilter.selectedIndex = 0;

    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);
  });
}

function filteredRender(shownArr, hiddenArr, render, trashbox) {
  if (shownArr.length) {
    shownArr.forEach(card => {
      if (isAppropriateCard(card) === false) {
        trashbox.prepend(card);
      }
    })
  }
  
  if (hiddenArr.length) {
    hiddenArr.forEach(card => {
      if (isAppropriateCard(card) === true) {
        render.prepend(card);
      }
    })
  }
}