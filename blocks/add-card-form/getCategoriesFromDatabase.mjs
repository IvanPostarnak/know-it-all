export default async function getCategoriesFromDatabase() {
  let defaultCategoriesURL = '/server/server.php?categories=default';

  let response = await fetch(defaultCategoriesURL);
  let data = await response.json();
  return data;
}