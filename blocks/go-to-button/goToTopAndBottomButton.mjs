export default function goToTopAndBottomButton() {
  const goToButton = document.querySelector('.js-go-top-and-bottom-button');
  let bottomCoordinates = document.documentElement.scrollHeight;
  let destination = "bot";

  window.addEventListener('scroll', () => {
    bottomCoordinates = document.documentElement.scrollHeight;
    if (window.scrollY > bottomCoordinates / 2) {
      goToButton.style.transform = "rotate(180deg)";
      destination = "top"
    } else {
      goToButton.style.transform = "rotate(0deg)";
      destination = "bot"
    }
  })

  goToButton.addEventListener('click', () => {
    bottomCoordinates = document.documentElement.scrollHeight;
    if (destination === "bot") {
      window.scrollTo(0 , bottomCoordinates);
    } else if (destination === "top") {
      window.scrollTo(0 , 0);
    }
  });
}