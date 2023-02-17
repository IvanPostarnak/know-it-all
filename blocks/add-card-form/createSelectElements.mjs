import getCategoriesFromDatabase from './getCategoriesFromDatabase.mjs'

export default async function createSelectElementsForCategories() {
  const tempCategories = await getCategoriesFromDatabase();
  const arrayOfSelectHolders = document.querySelectorAll('.js-select-holder');

  const mainSelect = createMainSelect();
  const mainSelectPlaceholder = createMainSelectPlaceholder();
  mainSelect.append(mainSelectPlaceholder);

  const additionalSelect = createAdditionalSelect();
  const additionalSelectPlaceholder = createAdditionalSelectPlaceholder();
  additionalSelect.append(additionalSelectPlaceholder);

  for (let id in tempCategories) {
    let option = document.createElement('option');
    option.value = id;
    option.text = tempCategories[id].name;
    option.classList.add('add-card-form__select-item');
    let optionClone = option.cloneNode(true);
    mainSelect.append(option);
    additionalSelect.append(optionClone);
  }

  arrayOfSelectHolders[0].textContent = '';
  arrayOfSelectHolders[1].textContent = '';
  arrayOfSelectHolders[0].append(mainSelect);
  arrayOfSelectHolders[1].append(additionalSelect);
}


function createMainSelect() {
  let mainSelect = document.createElement('select');
  mainSelect.classList.add('add-card-form__select-field', 'add-card-form__select-field--main-catefory');
  mainSelect.setAttribute('name', 'main-category');
  mainSelect.setAttribute('form', 'addNewCard');
  mainSelect.setAttribute('required', '');
  return mainSelect;
}

function createMainSelectPlaceholder() {
  let placeholder = document.createElement('option');
  placeholder.value = "";
  placeholder.text = 'main category';
  placeholder.setAttribute('selected', '');
  placeholder.setAttribute('disabled', '');
  placeholder.setAttribute('hidden', '');
  return placeholder;
}

function createAdditionalSelect() {
  let additionalSelect = document.createElement('select');
  additionalSelect.classList.add('add-card-form__select-field', 'add-card-form__select-field--additional-categories');
  additionalSelect.setAttribute('name', 'additional-category');
  additionalSelect.setAttribute('form', 'addNewCard');
  return additionalSelect;
}

function createAdditionalSelectPlaceholder() {
  let placeholder = document.createElement('option');
  placeholder.value = "";
  placeholder.text = 'additional categories';
  placeholder.setAttribute('selected', '');
  placeholder.setAttribute('disabled', '');
  placeholder.setAttribute('hidden', '');
  return placeholder;
}