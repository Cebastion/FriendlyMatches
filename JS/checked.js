const check = document.getElementById('customCheckbox')
const visible = document.querySelector('.visible')

if (check) {
  check.addEventListener('change', function() {
    if (this.checked) {
      visible.classList.add('active');
    } else {
      visible.classList.remove('active');
    }
  });
}