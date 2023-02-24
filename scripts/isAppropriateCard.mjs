export default function isAppropriateCard(card) {
  return (
    defaultCardVerdict(card) 
    && selectCardVerdict(card) 
    && inputSearchVerdict(card) 
    && dateSearchVerdict(card)
    || 
    usersCardVerdict(card) 
    && selectCardVerdict(card) 
    && inputSearchVerdict(card) 
    && dateSearchVerdict(card)
  );
}

function inputSearchVerdict(card) {
  const inputSearchFilter = document.querySelector('.js-filter-search');
  let request = inputSearchFilter.value.trim().toLowerCase();
  let textOfCard 
    = card.querySelector('.single-card__question').innerText 
    + card.querySelector('.single-card__answer').innerText;
  // console.log(request);
  // console.log(textOfCard);
  let verdict = false;

  if (request === "") {
    verdict = true;
  } else if (textOfCard.toLowerCase().includes(request)) {
    verdict = true;
  }

  return verdict;
}

function defaultCardVerdict(card) {
  const defaultCardsCheckbox = document.querySelector('.js-default-type');
  let verdict = false;

  if (defaultCardsCheckbox.checked) {
    if (card.querySelector('.single-card__type').textContent === "default") {
      verdict = true;
    }
  }

  return verdict;
}

function usersCardVerdict(card) {
  const usersCardsCheckbox = document.querySelector('.js-users-type');
  let verdict = false;

  if (usersCardsCheckbox.checked) {
    if (card.querySelector('.single-card__type').textContent === "users") {
      verdict = true;
    }
  }

  return verdict;
}

function selectCardVerdict(card) {
  const selectCategoryFilter = document.querySelector('.js-category-filter');
  let choice = selectCategoryFilter.value;
  let verdict = false;

  if (choice === "All") {
    verdict = true;
  } else if (
    card.querySelector('.single-card__main-category').textContent === choice 
    || card.querySelector('.single-card__additional-categories').textContent === choice
  ) {
    verdict = true;
  }

  return verdict;
}

function dateSearchVerdict(card) {
  const dateSearchFilter = document.querySelector('.js-date-filter');
  let requiredDate = dateSearchFilter.value;
  if (requiredDate == "") return true;

  let cardDate = card.querySelector('.single-card__time time').getAttribute('datetime');
  let cardDateYear = cardDate.slice(0, 4);
  
  let cardDateMonth = cardDate.slice(5, 7);
  let cardDateDay;

  if (cardDateMonth.split('')[1] == '-') {
    cardDateDay = cardDate.slice(7, 9);
    cardDateMonth = cardDateMonth.slice(0, -1);
    cardDateMonth = '0' + cardDateMonth;
  } else {
    cardDateDay = cardDate.slice(8, 10);
  }

  if (cardDateDay.split('')[1] == 'T') {
    cardDateDay = cardDateDay.slice(0, -1);
    cardDateDay = '0' + cardDateDay;
  }
  
  let extractedCardDate = cardDateYear + '-' + cardDateMonth + '-' + cardDateDay;

  return requiredDate == extractedCardDate;
}