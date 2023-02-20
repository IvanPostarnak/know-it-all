export default function createSingleCardHolder(appendTo, arrayOfHolders) {
  let cardHolder = document.createElement('div');
  cardHolder.classList.add('single-card-holder', 'js-single-card-holder');

  let cardPreloader = createCardPreloaderElement();
  cardHolder.append(cardPreloader);

  appendTo.append(cardHolder);
  arrayOfHolders.push(cardHolder);
}

export function createCardPreloaderElement() {
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