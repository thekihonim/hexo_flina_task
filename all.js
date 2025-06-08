// 初始化 Swiper
const blogSwiper = new Swiper('.blog-swiper', {
  // Swiper 設定
  loop: true,
  spaceBetween: 24,
  slidesPerView: 3,
  // 導覽箭頭設定
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // RWD 設定
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },
});