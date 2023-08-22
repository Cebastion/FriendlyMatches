document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".registration__form")
  const firstNameInput = form.querySelector('input[name="firstName"]')
  const lastNameInput = form.querySelector('input[name="lastName"]')
  const emailInput = form.querySelector('input[name="email"]')
  const profileSelect = form.querySelector("select")
  const passwordInput = form.querySelector('input[name="password"]')
  const confirmPasswordInput = form.querySelector('input[name="confirmPassword"]')
  const saveButton = form.querySelector(".registration__save")
  const refreshButton = form.querySelector(".registration__refresh")

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    let isValid = true

    if (firstNameInput.value.trim() === "") {
      alert("Please enter your first name.")
      isValid = false
    }

    if (lastNameInput.value.trim() === "") {
      alert("Please enter your last name.")
      isValid = false
    }

    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
      alert("Please enter a valid email address.")
      isValid = false
    }

    if (profileSelect.value === "") {
      alert("Please choose a profile.")
      isValid = false
    }

    if (passwordInput.value.length < 6) {
      alert("Password must be at least 6 characters long.")
      isValid = false
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Passwords do not match.")
      isValid = false
    }

    if (!isValid) {
      event.preventDefault() // Prevent form submission if validation fails
    }
    if (isValid) {
      firstNameInput.value = ''
      lastNameInput.value = ''
      emailInput.value = ''
      passwordInput.value = ''
      confirmPasswordInput.value = ''
      profileSelect.value = ''
    }
  })
})

refreshButton.addEventListener("click", (event) => {
  event.preventDefault()
  firstNameInput.value = ''
  lastNameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''
  confirmPasswordInput.value = ''
  profileSelect.value = ''
})