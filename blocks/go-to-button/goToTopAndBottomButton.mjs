export default function goToTopAndBottomButton() {
  const goToButton = document.querySelector('.js-go-top-and-bottom-button');
  const bottomCoordinates = document.documentElement.scrollHeight;
  let destination = "bot";

  goToButton.addEventListener('click', () => {
    if (destination === "bot") {
      window.scrollTo(0 , bottomCoordinates);
      goToButton.classList.remove("go-to-top-and-bottom-button--bot");
      goToButton.classList.add("go-to-top-and-bottom-button--top");
      destination = "top"
    } else if (destination === "top") {
      window.scrollTo(0 , 0);
      goToButton.classList.remove("go-to-top-and-bottom-button--top");
      goToButton.classList.add("go-to-top-and-bottom-button--bot");
      destination = "bot"
    }
  });
}