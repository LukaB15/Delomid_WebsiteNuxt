<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay],
      };
    },
  };
</script>

<template>
      <section class="pb-16">
            <div class="flex flex-col items-center pt-16 pb-16">
                  <h2 class="text-[34px]">Références clients</h2>
                  <div class="h-px w-72 bg-black bg-opacity-10"></div>
            </div>
            <swiper
            :modules="modules"
            :slides-per-view="4"
            :space-between="50"
            navigation
            autoplay
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="w-4/6"
            >
            <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/nomura.png" ></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/harmonie-mutuelle-300x115.jpg"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/baxter-300x150.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/BIL-Logo-RVB-Violet-300x154.jpg"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/toyota.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/eif.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/total.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/SPFF.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/rossel.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/renault.jpg"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/poste-luxembourg.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/orange.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/eib-300x132.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/electrabel-300x101.png"></nuxt-img>
                              </swiper-slide>
                              <swiper-slide>
                                    <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/eiffage-300x84.png"></nuxt-img>
                              </swiper-slide>
            </swiper>
      </section>
</template>

<style scoped>


</style>