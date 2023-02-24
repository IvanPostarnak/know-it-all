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

  const inputSearchFilter = document.querySelector('.js-filter-search');
  const defaultCardsCheckbox = document.querySelector('.js-default-type');
  const usersCardsCheckbox = document.querySelector('.js-users-type');
  const selectCategoryFilter = document.querySelector('.js-category-filter');
  const dateSearchFilter = document.querySelector('.js-date-filter');
  const resetDateButton = document.querySelector('.js-reset-date-button');
  const resetButton = document.querySelector('.js-reset-filter-button');

  inputSearchFilter.addEventListener('input', () => {
    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);

    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  });

  defaultCardsCheckbox.addEventListener('change', () => {
    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);
      
    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  });

  usersCardsCheckbox.addEventListener('change', () => {
    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);

    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  });

  selectCategoryFilter.addEventListener('change', () => {

    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);

    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  });

  dateSearchFilter.addEventListener('input', () => {
    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);

    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    // console.log(shownArrayOfCards);
    // console.log(hiddenCards);
  });

  resetDateButton.addEventListener('click', () => {
    dateSearchFilter.value = "";

    filteredRender(shownArrayOfCards, hiddenCards, cardsHolder, trashbox);
  });

  resetButton.addEventListener('click', () => {
    inputSearchFilter.value = "";
    defaultCardsCheckbox.checked = "true";
    usersCardsCheckbox.checked = "true";
    selectCategoryFilter.selectedIndex = 0;
    dateSearchFilter.value = "";

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