export default async function addCardIntoDatabase(data) {
  let localObject = await JSON.parse(data);
  localObject['lang'] = 'en';
  localObject['type'] = 'users';
  let thisMoment = new Date();
  localObject['time'] = {
    year: thisMoment.getFullYear(),
    month: thisMoment.getMonth() + 1,
    day: thisMoment.getDate(),
    weekDay: thisMoment.getDay(),
    hour: thisMoment.getHours(),
    minutes: thisMoment.getMinutes(),
    seconds: thisMoment.getSeconds()
  };
  localObject['cards'] = 'users';

  let sendingData = JSON.stringify(localObject);

  const response = await fetch('/server/server.php', {
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
    if (response.ok === false) throw new Error(response.status);
    const successMessage = document.querySelector('.js-submit-success-message');
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  } catch (error) {
    const errorMessage = document.querySelector('.js-submit-error-message');
    errorMessage.querySelector('p').textContent = `${error}`;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 3000);
  }
}