export default async function getMetaOfDatabase() {
  const response = await fetch("/server/server.php?meta=1");
  const data = await response.json();
  return data;
}