    const button = document.querySelector("button"); // берём первую кнопку на странице

window.addEventListener("scroll", checkButton);

function checkButton() {
  const triggerBottom = window.innerHeight * 0.8;
  const buttonTop = button.getBoundingClientRect().top;

  if (buttonTop < triggerBottom) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
}