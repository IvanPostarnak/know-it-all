export default function bubbleGlide() {
  const bubble = document.querySelector('.js-bubble');
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;

  let vector = {
    x: 1,
    y: 1
  }

  function step(timestamp) {
    const {left:x, top:y} = bubble.getBoundingClientRect()
    
     // change direction
    if (x < 0) vector.x *= -1
    if (y < 0) vector.y *= -1
    if (x > screenWidth - bubble.offsetWidth) vector.x *= -1
    if (y > screenHeight - bubble.offsetHeight) vector.y *= -1
  
    bubble.style.left = x + vector.x + 'px'
    bubble.style.top = y + vector.y + 'px'
  
    //console.log(x, y, vector)
  
    requestAnimationFrame(step);
  }
  
  requestAnimationFrame(step);
}