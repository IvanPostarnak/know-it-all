import getCategoriesFromDatabase from "../blocks/add-card-form/getCategoriesFromDatabase.mjs";

export default async function createSelectElementsOfFilter(categories) {
  let arrayOfSelectHolderInFilter = document.querySelector('.js-select-filter-holder');
  let objectOfCategories = await getCategoriesFromDatabase();
  const select = createSelect();

  let option;

  for (let key in categories) {
    option = document.createElement('option');
    option.value = key;
    option.style.color = objectOfCategories[key].color;
    option.text = `${key} (${categories[key]})`;
    option.classList.add('add-card-form__select-item');
    select.append(option);
  }

  option = document.createElement('option');
  option.value = "All";
  option.text = `All`;
  option.classList.add('add-card-form__select-item');
  option.setAttribute('selected', '');
  select.prepend(option);

  arrayOfSelectHolderInFilter.textContent = '';
  arrayOfSelectHolderInFilter.append(select);
}


function createSelect() {
  let select = document.createElement('select');
  select.classList.add('add-card-form__select-field', 'js-category-filter');
  select.setAttribute('name', 'chooseCategory');
  return select;
}