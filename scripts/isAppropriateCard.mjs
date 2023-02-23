export default function isAppropriateCard(card) {
  return (
    defaultCardVerdict(card) && selectCardVerdict(card) 
    || usersCardVerdict(card) && selectCardVerdict(card)
  );
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