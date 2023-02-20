export default function createAndReturnSingleCardStructure() {
  let cardStructure = document.createElement('article');
  cardStructure.classList.add('single-card');

  let content = document.createElement('div');
  content.classList.add('single-card__content');

  let headerLine = document.createElement('div');
  headerLine.classList.add('single-card__header-line');
  headerLine.append(document.createElement('p'));
  headerLine.lastChild.classList.add('single-card__question');

  let answer = document.createElement('p');
  answer.classList.add('single-card__answer');

  content.append(headerLine);
  content.append(answer);
  cardStructure.append(content);

  let info = document.createElement('div');
  info.classList.add('single-card__info');

  let metadata = document.createElement('div');
  metadata.classList.add('single-card__metadata');

  let type = document.createElement('a');
  type.classList.add('single-card__type');

  let lang = document.createElement('a');
  lang.classList.add('single-card__lang');

  let time = document.createElement('a');
  time.classList.add('single-card__time');

  metadata.append(type);
  metadata.append(lang);
  metadata.append(time);

  let id = document.createElement('p');
  id.classList.add('single-card__id');

  let categories = document.createElement('div');
  categories.classList.add('single-card__categories');

  let mainCategoryWrapper = document.createElement('div');
  mainCategoryWrapper.classList.add('single-card__main-category-wrapper');

  let mainCategory = document.createElement('a');
  mainCategory.classList.add('single-card__main-category');

  mainCategoryWrapper.append(mainCategory);

  let additionalCategoriesWrapper = document.createElement('div');
  additionalCategoriesWrapper.classList.add('single-card__additional-categories-wrapper');

  let additionalCategories = document.createElement('a');
  additionalCategories.classList.add('single-card__additional-categories');

  additionalCategoriesWrapper.append(additionalCategories);

  categories.append(mainCategoryWrapper);
  categories.append(additionalCategoriesWrapper);

  info.append(metadata);
  info.append(id);
  info.append(categories);

  cardStructure.append(info);

  return cardStructure;
}