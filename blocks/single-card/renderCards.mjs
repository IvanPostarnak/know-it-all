import createSingleCardHolder from "./createSingleCardHolder.mjs";
import fillCardFolderWithSingleCard from "./fillCardHolderWithCard.mjs";
import getDefaultCardsFromDatabase from "./getCardsFromDatabase.mjs";
import { getUsersCardsFromDatabase } from "./getCardsFromDatabase.mjs";
import getCategoriesFromDatabase from "/blocks/add-card-form/getCategoriesFromDatabase.mjs";

export default async function renderCards() {
  let defaultCards = await getDefaultCardsFromDatabase();
  let usersCards = await getUsersCardsFromDatabase();
  let categories = await getCategoriesFromDatabase();

  let allCards = {};
  Object.assign(allCards, usersCards, defaultCards);

  const cardsHolder = document.querySelector('.js-cards-holder');
  const singleHoldersArray = Array.from(document.querySelectorAll('.js-single-card-holder'));

  let nextToBeSet = 0;
  for (let key in allCards) {
    if (nextToBeSet === singleHoldersArray.length) {
      let singleCardHolder = createSingleCardHolder();
      cardsHolder.prepend(singleCardHolder);
      singleHoldersArray.unshift(singleCardHolder);
    }
    fillCardFolderWithSingleCard(singleHoldersArray[0], allCards[key], key);
    nextToBeSet++;
  }

  singleHoldersArray.forEach((holder) => {
    let category = holder.querySelector('.single-card__main-category');
    holder.style.border = `2px solid ${categories[category.textContent].color}`;
    category.style.color = categories[category.textContent].color;
  })
}