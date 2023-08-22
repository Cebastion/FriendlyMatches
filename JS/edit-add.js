document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll('.edit img');
  const plusButtons = document.querySelectorAll('.plus');

  function handleEditOrPlusClick(event, isEdit) {
    const button = event.target;
    const container = button.closest(isEdit ? '.edit' : '.plus');
    const eventTextContainer = container.closest('.event__text');
    const textTextContainer = eventTextContainer.querySelector('.text__text');

    if (isEdit) {
      if (eventTextContainer) {
        const originalText = textTextContainer.innerHTML;
        const editTextarea = document.createElement('textarea');
        editTextarea.value = originalText;

        if (window.confirm('Вы хотите редактировать текст?')) {
          const newText = prompt('Введите отредактированный текст:', editTextarea.value);
          if (newText !== null) {
            textTextContainer.innerHTML = newText.replace(/\n/g, '<br>');
          }
        }
      } else {
        const originalText = container.previousSibling.textContent.trim();
        const newText = prompt('Введите отредактированный текст:', originalText);

        if (newText !== null) {
          container.previousSibling.textContent = newText;
        }
      }
    } else {
      const inputText = prompt('Введите текст для добавления:', '');
      if (inputText !== null && inputText.trim() !== '') {
        if (textTextContainer) {
          const newParagraph = document.createElement('p');
          newParagraph.innerHTML = inputText.replace(/\n/g, '<br>');
          textTextContainer.appendChild(newParagraph);
        }
      }
    }
  }

  editButtons.forEach(button => {
    button.addEventListener('click', event => handleEditOrPlusClick(event, true));
  });

  plusButtons.forEach(button => {
    button.addEventListener('click', event => handleEditOrPlusClick(event, false));
  });
});
