import createAndReturnSingleCardStructure from "./createSingleCardStructure.mjs";

export default function fillCardFolderWithSingleCard(holder, oneCard, key) {

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
  let timeString = `${oneCard.time['year']}-${oneCard.time['month']}-${oneCard.time['day']}T${oneCard.time['hour']}:${oneCard.time['minutes']}:${oneCard.time['seconds']}`;
  let timeElement = document.createElement('time');
  timeElement.setAttribute('datetime', timeString);
  timeElement.textContent = `${oneCard.time['day']}.${oneCard.time['month']}.${oneCard.time['year']}`;
  time.append(timeElement);

  let id = cardStructure.querySelector('.single-card__id');
  id.textContent = key;

  let mainCategory = cardStructure.querySelector('.single-card__main-category');
  mainCategory.textContent = oneCard['main-category'];

  let additionalCategories = cardStructure.querySelector('.single-card__additional-categories');
  additionalCategories.textContent = oneCard['additional-category'];

  holder.append(cardStructure);
}