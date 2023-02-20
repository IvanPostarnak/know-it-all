export default async function getDefaultCardsFromDatabase() {
  let defaultCardsURL = "/server/server.php?cards=default";

  let response = await fetch(defaultCardsURL);
  let data = await response.json();
  return data;
}
