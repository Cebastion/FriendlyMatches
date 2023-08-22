document.addEventListener('DOMContentLoaded', function() {
  const addSelectButton = document.querySelector('.add__select');
  const registrationRow = document.querySelector('.registration__row');

  addSelectButton.addEventListener('click', function() {
    const selectClone = registrationRow.querySelector('select').cloneNode(true);
    registrationRow.insertBefore(selectClone, addSelectButton);
  });
});
