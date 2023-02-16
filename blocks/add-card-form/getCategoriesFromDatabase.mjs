export default async function getCategoriesFromDatabase() {
  let defaultCategoriesURL = '/database/defaultCategories.json';

  let response = await fetch(defaultCategoriesURL);
  let data = await response.json();
  return data;
}