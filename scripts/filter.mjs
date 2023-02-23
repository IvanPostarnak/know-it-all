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
  console.log(shownArrayOfCards);
  console.log(hiddenCards);

  const defaultCardsCheckbox = document.querySelector('.js-default-type');
  const usersCardsCheckbox = document.querySelector('.js-users-type');
  const selectCategoryFilter = document.querySelector('.js-category-filter');

  defaultCardsCheckbox.addEventListener('change', () => {
    if (shownArrayOfCards.length) {
      shownArrayOfCards.forEach(card => {
        if (isAppropriateCard(card) === false) {
          trashbox.prepend(card);
        }
      })
    }
    
    if (hiddenCards.length) {
      hiddenCards.forEach(card => {
        if (isAppropriateCard(card) === true) {
          cardsHolder.prepend(card);
        }
      })
    }  
      
    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    console.log(shownArrayOfCards);
    console.log(hiddenCards);
  })

  usersCardsCheckbox.addEventListener('change', () => {
    // if (usersCardsCheckbox.checked) {
    //   hiddenCards.forEach(card => {
    //     if (
    //       card.querySelector('.single-card__type').textContent === "users"
    //       && (card.querySelector('.single-card__main-category').textContent === document.querySelector('.js-category-filter').value
    //       || card.querySelector('.single-card__additional-categories').textContent === document.querySelector('.js-category-filter').value)
    //     ) {
    //       cardsHolder.prepend(card);
    //     }
    //   })
    // } else {
    //   shownArrayOfCards.forEach(card => {
    //     if (card.querySelector('.single-card__type').textContent === "users") {
    //       trashbox.prepend(card);
    //     }
    //   })
    // }
    if (shownArrayOfCards.length) {
      shownArrayOfCards.forEach(card => {
        if (isAppropriateCard(card) === false) {
          trashbox.prepend(card);
        }
      })
    }
    
    if (hiddenCards.length) {
      hiddenCards.forEach(card => {
        if (isAppropriateCard(card) === true) {
          cardsHolder.prepend(card);
        }
      })
    } 
    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    console.log(shownArrayOfCards);
    console.log(hiddenCards);
  })

  selectCategoryFilter.addEventListener('change', elem => {
    let choice = selectCategoryFilter.value;
    console.log(choice);
    // shownArrayOfCards.forEach(card => {
    //   if (choice === "All") {
    //     card.style.display = "block";
    //     card.style.visibility = "visible";
    //   } else {
    //     if (
    //       card.querySelector('.single-card__main-category').textContent === choice
    //       || card.querySelector('.single-card__additional-categories').textContent === choice
    //     ) {
    //       card.style.display = "block";
    //       card.style.visibility = "visible";
    //     } else {
    //       card.style.display = "none";
    //       card.style.visibility = "hidden";
    //     }
    //   }
    // });
    if (shownArrayOfCards.length) {
      shownArrayOfCards.forEach(card => {
        if (isAppropriateCard(card) === false) {
          trashbox.prepend(card);
        }
      })
    }
    
    if (hiddenCards.length) {
      hiddenCards.forEach(card => {
        if (isAppropriateCard(card) === true) {
          cardsHolder.prepend(card);
        }
      })
    } 
    shownArrayOfCards = Array.from(cardsHolder.querySelectorAll('.js-single-card-holder'));
    hiddenCards = Array.from(trashbox.querySelectorAll('.js-single-card-holder'));
    console.log(shownArrayOfCards);
    console.log(hiddenCards);
  });
}