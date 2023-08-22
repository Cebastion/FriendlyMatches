new Swiper('.swiper', {
  loop: false,
  touchMoveStopPropagation: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
})