export default async function appearAndRemoveSubmitMessage(state) {
  let message = null;
  if (state == undefined) {
    message = document.querySelector('.js-submit-success-message');
  } else {
    message = document.querySelector('.js-submit-error-message');
    message.querySelector('p').textContent = `${state}`;
  }

  const submitRectangle = message.getBoundingClientRect();
  const startedOffset = submitRectangle.left;
  const screenWidth = document.documentElement.clientWidth;
  const targetLeftOffset = screenWidth - submitRectangle.width - 10;

  let timerAppear = setInterval(() => {
    const {left: x} = message.getBoundingClientRect();
    if (x <= targetLeftOffset) {
      clearInterval(timerAppear);
      return;
    }
    let offset = x - 1 + 'px';
    message.style.left = offset;
  }, 10);

  setTimeout(() => {
    let timerDisappear = setInterval(() => {
      const {left: x} = message.getBoundingClientRect();
      if (x >= startedOffset) {
        clearInterval(timerDisappear);
        return;
      }
      let offset = x + 1 + 'px';
      message.style.left = offset;
    }, 10);
  }, 3000);

  // function step(timestamp) {
  //   // do something for every frame
  //   window.requestAnimationFrame(step);
  // }
  // window.requestAnimationFrame(step);
}