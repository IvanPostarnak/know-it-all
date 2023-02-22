export default async function filterCards() {
  let metaObject = await getMetaOfDatabase();

  const arrayOfCards = Array.from(document.querySelectorAll('.single-card'));
  console.log(arrayOfCards);
}

async function getMetaOfDatabase() {
  const response = await fetch("/server/server.php?meta=1");
  const data = await response.json();
  console.log(data);
  return data;
}