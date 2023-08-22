document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".registration__form")
  const profileSelect = form.querySelector("select")
  const saveButton = form.querySelector(".registration__save")

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    let isValid = true

    if (profileSelect.value === "") {
      alert("Please choose a profile.")
      isValid = false
    }

    if (!isValid) {
      event.preventDefault() // Prevent form submission if validation fails
    }

    if (isValid) {
      profileSelect.value = ''
    }
  })
})