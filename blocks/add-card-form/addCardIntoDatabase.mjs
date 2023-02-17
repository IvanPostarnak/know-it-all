export default async function addCardIntoDatabase(data) {
  let localObject = await JSON.parse(data);
  localObject['cards'] = 'users';

  let sendingData = JSON.stringify(localObject);

  const response = await fetch('/server/index.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: sendingData
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