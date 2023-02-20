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
  const singleHolders = document.querySelectorAll('.js-single-card-holder');
  const singleHoldersArray = Array.from(singleHolders);

  let nextToBeSet = 0;
  for (let key in allCards) {
    if (nextToBeSet === singleHoldersArray.length) {
      createSingleCardHolder(cardsHolder, singleHoldersArray);
    }
    nextToBeSet++;
  }

  nextToBeSet = 0;
  for (let key in allCards) {
    fillCardFolderWithSingleCard(singleHoldersArray[nextToBeSet], allCards[key], key);
    nextToBeSet++;
  }
}