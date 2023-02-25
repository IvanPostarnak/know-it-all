export default async function getCategoriesFromDatabase() {
  let cookie = document.cookie;
  if (cookie) {
    let data = cookie.split(';')[0];
    return JSON.parse(data.split('=')[1]);
  } else {
    let defaultCategoriesURL = '/server/server.php?categories=default';
    let response = await fetch(defaultCategoriesURL);
    let data = await response.json();
    console.log(data);
    document.cookie = `cards=${JSON.stringify(data)}; path=/;`;
    return data;
  }
}