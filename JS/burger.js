document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger")
  const menu = document.querySelector(".center__menu")
  const search = document.querySelector(".center__search")
  const logo = document.querySelector(".center__logo")
  const header__center = document.querySelector(".header__center")
  const body = document.body

  burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
    search.classList.toggle("active")
    logo.classList.toggle("hide")
    header__center.classList.toggle("active")

    if (body.style.overflow === "hidden") {
      body.style.overflow = "auto"
    } else {
      body.style.overflow = "hidden"
    }
  })
})