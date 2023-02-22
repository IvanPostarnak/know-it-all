import getMetaOfDatabase from "./getMetaOfDatabase.mjs";
import createSelectElementsOfFilter from "./createSelectElementsOfFilter.mjs";

export default async function filterCards() {
  let metaObject = await getMetaOfDatabase();

  await createSelectElementsOfFilter(metaObject['categories']);

  let shownArrayOfCards = Array.from(document.querySelectorAll('.js-single-card-holder'));
  // const arrayOfCards = [...shownArrayOfCards];
  console.log(shownArrayOfCards);


  const defaultCardsCheckbox = document.querySelector('.js-default-type');
  const usersCardsCheckbox = document.querySelector('.js-users-type');

  defaultCardsCheckbox.addEventListener('change', () => {
    if (defaultCardsCheckbox.checked) {
      shownArrayOfCards.forEach(card => {
        if (card.querySelector('.single-card__type').textContent === "default") {
          card.style.display = "block";
          card.style.visibility = "visible";
        }
      })
    } else {
      shownArrayOfCards.forEach(card => {
        if (card.querySelector('.single-card__type').textContent === "default") {
          card.style.display = "none";
          card.style.visibility = "hidden";
        }
      })
    }
    console.log(shownArrayOfCards);
  })

  usersCardsCheckbox.addEventListener('change', () => {
    if (usersCardsCheckbox.checked) {
      shownArrayOfCards.forEach(card => {
        if (card.querySelector('.single-card__type').textContent === "users") {
          card.style.display = "block";
          card.style.visibility = "visible";
        }
      })
    } else {
      shownArrayOfCards.forEach(card => {
        if (card.querySelector('.single-card__type').textContent === "users") {
          card.style.display = "none";
          card.style.visibility = "hidden";
        }
      })
    }
    console.log(shownArrayOfCards);
  })

  const selectCategoryFilter = document.querySelector('.js-category-filter');
  selectCategoryFilter.addEventListener('change', elem => {
    let choice = selectCategoryFilter.value;
    console.log(choice);
    shownArrayOfCards.forEach(card => {
      if (choice === "All") {
        card.style.display = "block";
        card.style.visibility = "visible";
      } else {
        if (
          card.querySelector('.single-card__main-category').textContent === choice
          || card.querySelector('.single-card__additional-categories').textContent === choice
        ) {
          card.style.display = "block";
          card.style.visibility = "visible";
        } else {
          card.style.display = "none";
          card.style.visibility = "hidden";
        }
      }
    });
  });
}