export default async function getDefaultCardsFromDatabase() {
  let defaultCardsURL = "/server/server.php?cards=default";

  let response = await fetch(defaultCardsURL);
  let data = await response.json();
  return data;
}

export async function getUsersCardsFromDatabase() {
  let usersCardsURL = "/server/server.php?cards=users";

  let response = await fetch(usersCardsURL);
  let data = await response.json();
  return data;
}