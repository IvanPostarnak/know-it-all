import getCategoriesFromDatabase from './getCategoriesFromDatabase.mjs'

export default async function createSelectElementsForCategories() {
  const tempCategories = await getCategoriesFromDatabase();
  const arrayOfSelectHolders = document.querySelectorAll('.js-select-holder');

  const mainSelect = document.createElement('select');
  mainSelect.classList.add('add-card-form__select-field', 'add-card-form__select-field--main-catefory');
  mainSelect.setAttribute('name', 'main-category');
  mainSelect.setAttribute('form', 'addNewCard');
  
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
  additionalSelect.setAttribute('name', 'additional-category');
  additionalSelect.setAttribute('form', 'addNewCard');
  
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