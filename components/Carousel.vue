<script setup>
</script>

<template>
      <section class="pb-16">
            <div class="flex flex-col items-center pt-16 pb-16">
                  <h2 class="text-[34px]">Références clients</h2>
                  <div class="h-px w-72 bg-black bg-opacity-10"></div>
            </div>
            <Swiper
            :slides-per-view="4"
            :space-between="10"
            :modules="[SwiperAutoplay]"
            :loop="true"
            :autoplay="{
            delay: 6000,
            disableOnInteraction: true,
            }"
            class="w-4/6"
            >
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/nomura.png" ></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/harmonie-mutuelle-300x115.jpg"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/baxter-300x150.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/BIL-Logo-RVB-Violet-300x154.jpg"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/toyota.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/eif.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/total.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/SPFF.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/rossel.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/renault.jpg"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/poste-luxembourg.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/orange.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/eib-300x132.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/electrabel-300x101.png"></nuxt-img>
                  </SwiperSlide>
                  <SwiperSlide>
                        <nuxt-img src="https://www.delomid-it.com/wp-content/uploads/2020/03/eiffage-300x84.png"></nuxt-img>
                  </SwiperSlide>
            </Swiper>
      </section>
</template>

<style scoped>
      
</style>
