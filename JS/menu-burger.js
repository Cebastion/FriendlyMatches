document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll('.menu__more');

  // Добавляем обработчик события для каждого пункта меню
  menuItems.forEach(menuItem => {
    // Получаем ссылку на подменю
    const subMenu = menuItem.querySelector('.menu__drop-down');
    // Если находимся на устройстве с маленьким экраном (мобильные устройства)
    if (window.innerWidth <= 1020) {
      // Добавляем обработчик клика для пункта меню
      menuItem.addEventListener('click', event => {
        // Деактивируем все подменю
        menuItems.forEach(item => {
          const otherSubMenu = item.querySelector('.menu__drop-down');
          if (otherSubMenu !== subMenu) {
            otherSubMenu.classList.remove('active');
          }
        });

        // Переключаем видимость подменю при клике на пункт меню
        subMenu.classList.toggle('active');
      });
    } 
  });
});