const chat__burger = document.querySelector(".chat__burger")
const chat__left = document.querySelector(".chat__left")

chat__burger.addEventListener('click', () => {
  chat__burger.classList.toggle("active")
  chat__left.classList.toggle("active")
})
