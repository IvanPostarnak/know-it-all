export default function isAppropriateCard(card) {
  inputSearchVerdict(card);
  return (
    defaultCardVerdict(card) && selectCardVerdict(card) && inputSearchVerdict(card)
    || usersCardVerdict(card) && selectCardVerdict(card) && inputSearchVerdict(card)
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