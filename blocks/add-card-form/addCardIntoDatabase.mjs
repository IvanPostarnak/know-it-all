export default async function addCardIntoDatabase(data) {
  const response = await fetch('/server/index.php?cards=users', {
    method: 'POST',
    body: data,
  });
  await validateResponse(response);
  return response.status;
}

async function validateResponse(response) {
  try {
    if (response.ok === false) throw new Error(`User Error: ${response.status}`);
  } catch (error) {
    console.log(error.message);
  }
}