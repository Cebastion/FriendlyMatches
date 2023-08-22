function initMap() {
  // Координаты центра карты
  var center = { lat: 40.712776, lng: -74.005974 }; // Пример: Нью-Йорк

  // Создание объекта карты
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12 // Уровень масштабирования карты
  });

  // Создание маркера
  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Hello World!'
  });
}