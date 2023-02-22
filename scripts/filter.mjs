export default async function filterCards() {
  let metaObject = await getMetaOfDatabase();

  let shownArrayOfCards = Array.from(document.querySelectorAll('.js-single-card-holder'));
  const arrayOfCards = [...shownArrayOfCards];
  console.log(shownArrayOfCards);
  console.log(arrayOfCards);


  const defaultCardsCheckbox = document.querySelector('.js-default-type');
  const usersCardsCheckbox = document.querySelector('.js-users-type');

  let areDefaultCardsShown = defaultCardsCheckbox.checked;
  let areUsersCardsShown = usersCardsCheckbox.checked;

  console.log(areDefaultCardsShown);
  console.log(areUsersCardsShown);

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
  })
}

async function getMetaOfDatabase() {
  const response = await fetch("/server/server.php?meta=1");
  const data = await response.json();
  console.log(data);
  return data;
}