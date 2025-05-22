<template>
  <div style="background-color:rgb(2, 94, 94)">
    <div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="responsive" src="/img/sports.jpg" alt="item.src">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [{
        src: '/img/sports.jpg'
      }, {
        src: '/img/baby.jpg'
      }, {
        src: '/img/mon&baby.jpg'
      }
      ],
      // swiperOption: {
      //   slidesPerView: 1,
      //   spaceBetween: 8,
      //   breakpoints: {
      //     // when window width is <= 320px
      //     320: {
      //       // slidesPerView: 3,
      //     //   spaceBetween: 8
      //     },
      //     // when window width is <= 480px
      //     480: {
      //       // slidesPerView: 3,
      //     //   spaceBetween: 8
      //     },
      //     // when window width is <= 800px
      //     800: {
      //       // slidesPerView: 3,
      //       // spaceBetween: 1
      //     }
      //   },
      //   autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: true
      //   },
      //   pagination: {
      //     el: '.swiper-pagination'
      //   }
      // }
    }
  }
}
</script>

<style scoped>
.responsive {
  width: 100%;
  /* max-width: 100%; */
  height: auto;
  z-index: -100;
}
</style>
