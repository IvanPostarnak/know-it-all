import getDefaultCardsFromDatabase from "./getCardsFromDatabase.mjs";

export default async function addCards() {
  let defaultCards = await getDefaultCardsFromDatabase();

  const cardsHolder = document.querySelector('.js-cards-holder');
  const singleHolders = document.querySelectorAll('.js-single-card-holder');
  const singleHoldersArray = Array.from(singleHolders);

  let nextToBeSet = 0;
  for (let key in defaultCards) {
    if (nextToBeSet === singleHoldersArray.length) {
      createSingleCardHolder(cardsHolder, singleHoldersArray);
    }
    nextToBeSet++;
  }

  nextToBeSet = 0;
  for (let key in defaultCards) {
    fillCardFolderWithSingleCard(singleHoldersArray[nextToBeSet], defaultCards[key], key);
    nextToBeSet++;
  }
  
}

function createSingleCardHolder(appendTo, arrayOfHolders) {
  let cardHolder = document.createElement('div');
  cardHolder.classList.add('single-card-holder', 'js-single-card-holder');

  let cardPreloader = createCardPreloaderElement();
  cardHolder.append(cardPreloader);

  appendTo.append(cardHolder);
  arrayOfHolders.push(cardHolder);
}

function createCardPreloaderElement() {
  let cardPreloader = document.createElement('div');
  cardPreloader.classList.add('single-card-preloader');

  let innerElement = document.createElement('div');
  innerElement.classList.add('loadingio-spinner-pulse-if2u0pyqwxs');
  cardPreloader.append(innerElement);

  innerElement = document.createElement('div');
  innerElement.classList.add('ldio-nxtxow40e7');
  innerElement.append(document.createElement('div'));
  innerElement.append(document.createElement('div'));
  innerElement.append(document.createElement('div'));
  cardPreloader.lastChild.append(innerElement);

  return cardPreloader;
}

function fillCardFolderWithSingleCard(holder, oneCard, key) {

  holder.textContent = '';
  let cardStructure = createAndReturnSingleCardStructure();

  let question = cardStructure.querySelector('.single-card__question');
  question.textContent = oneCard['question'];

  let answer = cardStructure.querySelector('.single-card__answer');
  answer.textContent = oneCard['answer'];

  let type = cardStructure.querySelector('.single-card__type');
  type.textContent = oneCard['type'];

  let lang = cardStructure.querySelector('.single-card__lang');
  lang.textContent = oneCard['lang'];

  let time = cardStructure.querySelector('.single-card__time');
  let timeString = `${oneCard.time['year']}-${oneCard.time['month']}-${oneCard.time['day']}-${oneCard.time['hour']}-${oneCard.time['minutes']}-${oneCard.time['seconds']}`;
  let timeElement = document.createElement('time');
  timeElement.setAttribute('datetime', timeString);
  timeElement.textContent = `${oneCard.time['day']}.${oneCard.time['month']}.${oneCard.time['year']}`;
  time.append(timeElement);

  let id = cardStructure.querySelector('.single-card__id');
  id.textContent = key;

  let mainCategory = cardStructure.querySelector('.single-card__main-category');
  mainCategory.textContent = oneCard['main-category'];

  let additionalCategories = cardStructure.querySelector('.single-card__additional-categories');
  additionalCategories.textContent = oneCard['additional-categories'];

  holder.append(cardStructure);
}

function createAndReturnSingleCardStructure() {
  let cardStructure = document.createElement('article');
  cardStructure.classList.add('single-card');

  let content = document.createElement('div');
  content.classList.add('single-card__content');

  let headerLine = document.createElement('div');
  headerLine.classList.add('single-card__header-line');
  headerLine.append(document.createElement('p'));
  headerLine.lastChild.classList.add('single-card__question');

  let answer = document.createElement('p');
  answer.classList.add('single-card__answer');

  content.append(headerLine);
  content.append(answer);
  cardStructure.append(content);

  let info = document.createElement('div');
  info.classList.add('single-card__info');

  let metadata = document.createElement('div');
  metadata.classList.add('single-card__metadata');

  let type = document.createElement('a');
  type.classList.add('single-card__type');

  let lang = document.createElement('a');
  lang.classList.add('single-card__lang');

  let time = document.createElement('a');
  time.classList.add('single-card__time');

  metadata.append(type);
  metadata.append(lang);
  metadata.append(time);

  let id = document.createElement('p');
  id.classList.add('single-card__id');

  let categories = document.createElement('div');
  categories.classList.add('single-card__categories');

  let mainCategoryWrapper = document.createElement('div');
  mainCategoryWrapper.classList.add('single-card__main-category-wrapper');

  let mainCategory = document.createElement('a');
  mainCategory.classList.add('single-card__main-category');

  mainCategoryWrapper.append(mainCategory);

  let additionalCategoriesWrapper = document.createElement('div');
  additionalCategoriesWrapper.classList.add('single-card__additional-categories-wrapper');

  let additionalCategories = document.createElement('a');
  additionalCategories.classList.add('single-card__additional-categories');

  additionalCategoriesWrapper.append(additionalCategories);

  categories.append(mainCategoryWrapper);
  categories.append(additionalCategoriesWrapper);

  info.append(metadata);
  info.append(id);
  info.append(categories);

  cardStructure.append(info);

  return cardStructure;
}