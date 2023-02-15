export default async function addCardIntoDatabase(data) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: data,
  });
  await validateResponse(response);
  return response.status;
}