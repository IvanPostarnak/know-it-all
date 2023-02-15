export default function addCardIntoDatabase() {
  const cardForm = document.querySelector('.js-cardForm');

  cardForm.addEventListener("submit", (elem) => {
    elem.preventDefault();

    const formData = new FormData(cardForm);
    const formObject = Object.fromEntries(formData.entries());
    const formObjectJson = JSON.stringify(formObject);

    console.log(formObjectJson);
    saveData(formObjectJson).then((data) => console.log(data));
  })
}

async function saveData(data) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
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