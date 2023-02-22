export default async function createSelectElementsOfFilter(categories) {
  let arrayOfSelectHolderInFilter = document.querySelector('.js-select-filter-holder');
  const select = createSelect();
  const selectPlaceholder = createSelectPlaceholder();
  select.append(selectPlaceholder);

  for (let key in categories) {
    let option = document.createElement('option');
    option.value = key;
    option.text = `${key} (${categories[key]})`;
    option.classList.add('add-card-form__select-item');
    select.append(option);
  }

  arrayOfSelectHolderInFilter.textContent = '';
  arrayOfSelectHolderInFilter.append(select);
}


function createSelect() {
  let select = document.createElement('select');
  select.classList.add('add-card-form__select-field', 'js-category-filter');
  select.setAttribute('name', 'chooseCategory');
  return select;
}

function createSelectPlaceholder() {
  let placeholder = document.createElement('option');
  placeholder.value = "";
  placeholder.text = 'choose category';
  placeholder.setAttribute('selected', '');
  placeholder.setAttribute('disabled', '');
  placeholder.setAttribute('hidden', '');
  return placeholder;
}