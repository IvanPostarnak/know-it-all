export default function goToTopAndBottomButton() {
  const goToButton = document.querySelector('.js-go-top-and-bottom-button');
  const bottomCoordinates = document.documentElement.scrollHeight;
  let destination = "bot";

  goToButton.addEventListener('click', () => {
    if (destination === "bot") {
      window.scrollTo(0 , bottomCoordinates);
      destination = "top"
    } else if (destination === "top") {
      window.scrollTo(0 , 0);
      destination = "bot"
    }
  });
}