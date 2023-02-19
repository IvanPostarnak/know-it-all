export default async function addCards() {
  let defaultCards = await getDefaultCardsFromDatabase();
}

async function getDefaultCardsFromDatabase() {
  let defaultCardsURL = "/server/server.php?cards=default";

  let response = await fetch(defaultCardsURL);
  let data = await response.json();
  console.log(data);
  return data;
}