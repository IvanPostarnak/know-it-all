import createSingleCardHolder from "./createSingleCardHolder.mjs";
import fillCardFolderWithSingleCard from "./fillCardHolderWithCard.mjs";
import getDefaultCardsFromDatabase from "./getCardsFromDatabase.mjs";
import {getUsersCardsFromDatabase} from "./getCardsFromDatabase.mjs";

export default async function renderCards() {
  let defaultCards = await getDefaultCardsFromDatabase();
  let usersCards = await getUsersCardsFromDatabase();
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
}