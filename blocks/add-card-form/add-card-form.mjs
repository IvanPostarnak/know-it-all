const tempCategories = {
  'html': 'HTML',
  'css': 'CSS',
  'js': 'JavaScript',
}


export default function addCardIntoDatabase() {
  createSelectElementsForCategories();
  
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


function createSelectElementsForCategories() {
  const arrayOfSelectHolders = document.querySelectorAll('.add-card-form__select-holder');
  
  const mainSelect = document.createElement('select');
  mainSelect.classList.add('add-card-form__select-field', 'add-card-form__select-field--main-catefory');
  const mainSelectPlaceholder = document.createElement('option');
  mainSelectPlaceholder.value = "";
  mainSelectPlaceholder.text = 'main category';
  mainSelectPlaceholder.setAttribute('selected', '');
  mainSelectPlaceholder.setAttribute('disabled', '');
  mainSelectPlaceholder.setAttribute('hidden', '');
  mainSelect.append(mainSelectPlaceholder);

  for (let id in tempCategories) {
    const option = document.createElement('option');
    option.value = id;
    option.text = tempCategories[id];
    option.classList.add('add-card-form__select-item');
    mainSelect.append(option);
  }

  const additionalSelect = document.createElement('select');
  additionalSelect.classList.add('add-card-form__select-field', 'add-card-form__select-field--additional-categories');
  additionalSelect.setAttribute('mmultiple', '');
  const additionalSelectPlaceholder = document.createElement('option');
  additionalSelectPlaceholder.value = "";
  additionalSelectPlaceholder.text = 'additional categories';
  additionalSelectPlaceholder.setAttribute('selected', '');
  additionalSelectPlaceholder.setAttribute('disabled', '');
  additionalSelectPlaceholder.setAttribute('hidden', '');
  additionalSelect.append(additionalSelectPlaceholder);

  for (let id in tempCategories) {
    const option = document.createElement('option');
    option.value = id;
    option.text = tempCategories[id];
    option.classList.add('add-card-form__select-item');
    additionalSelect.append(option);
  }

  arrayOfSelectHolders[0].append(mainSelect);
  arrayOfSelectHolders[1].append(additionalSelect);
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