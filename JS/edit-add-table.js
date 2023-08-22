document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll('.edit img')
  const plusButtons = document.querySelectorAll('.plus')

  function handleEditOrPlusClick(event, isEdit) {
    const button = event.target
    const container = button.closest(isEdit ? '.edit' : '.plus')
    const tableContainer = container.closest('.card-club__info') // Таблица, в которой находится кнопка

    if (isEdit) {
      if (tableContainer) {
        const cellToEdit = container.previousElementSibling // Выбираем второй элемент перед кнопкой
        const originalText = cellToEdit.textContent.trim()
        const newText = prompt('Введите отредактированный текст:', originalText)

        if (newText !== null) {
          cellToEdit.textContent = newText
        }
      }
    } else {
      const inputText = prompt('Введите текст для добавления:', '')
      if (inputText !== null && inputText.trim() !== '') {
        const cellWithSpan = container.closest('td') // Находим ячейку, в которой находится кнопка "plus"
        const secondSpan = cellWithSpan.querySelectorAll('span')[1] // Выбираем второй span

        if (secondSpan) {
          secondSpan.textContent += ', ' + inputText // Добавляем текст ко второму span
        } else {
          const newSpan = document.createElement('span')
          newSpan.textContent = inputText
          cellWithSpan.appendChild(newSpan)
        }
      }
    }
  }

  editButtons.forEach(button => {
    button.addEventListener('click', event => handleEditOrPlusClick(event, true))
  })

  plusButtons.forEach(button => {
    button.addEventListener('click', event => handleEditOrPlusClick(event, false))
  })
})
