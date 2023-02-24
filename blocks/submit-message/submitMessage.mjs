export default async function appearAndRemoveSubmitMessage(state) {
  let message = null;
  if (state == undefined) {
    message = document.querySelector('.js-submit-success-message');
  } else {
    message = document.querySelector('.js-submit-error-message');
    message.querySelector('p').textContent = `${state}`;
  }
 
  message.classList.remove('hidden');
  // setTimeout(() => {
  //   message.classList.add('hidden');
  // }, 3000);
}