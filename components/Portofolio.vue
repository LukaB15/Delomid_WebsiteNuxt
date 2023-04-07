<script setup>

</script>

<template>
      <section>
            <!-- Titre section -->
            <div class="flex flex-col items-center pt-16">
                  <h2 class="text-[34px] max-lg:text-[25px]">Portofolio</h2>
                  <h5 class="text-[20px] max-lg:text-[15px] mb-8 mt-6" >Aperçu de nos projet </h5>
                  <div class="h-px w-72 bg-black bg-opacity-10"></div>
            </div>
            <div class="flex flex-row max-lg:flex-col items-start max-lg:items-center justify-evenly mt-8 mb-16">
                  <div class="flex flex-col justify-center items-center max-lg:mb-4">
                        <h2 class="text-[24px] max-lg:text-[18px] text-[#2c3e50]">Déploiement Talend</h2>
                        <h5 class="max-lg:text-[15px]">Architecture, conseil, déploiement et coaching</h5>
                        <nuxt-img src="talend-schema.png" class="max-lg:w-1/2 max-lg:mt-4 max-lg:mb-4" />
                  </div>

                  <div class="flex flex-col justify-center items-center  max-lg:mb-4">
                        <h2 class="text-[24px] max-lg:text-[18px] text-[#2c3e50]">Intégration d’applications</h2>
                        <h5 class="max-lg:text-[15px]">Cadrage, analyse et réalisation</h5>
                        <nuxt-img src="integration-logo.png" class="w-96 max-lg:w-1/2 max-lg:mt-4 max-lg:mb-4" />
                  </div>

                  <div class="flex flex-col justify-center items-center  max-lg:mb-4">
                        <h2 class="text-[24px] max-lg:text-[18px] text-[#2c3e50]">Customer Analytics</h2>
                        <h5 class="max-lg:text-[15px]">Conseil et réalisation</h5>
                        <nuxt-img src="customer-analytics.png" class="w-96 max-lg:w-1/2 max-lg:mt-4 max-lg:mb-4" />
                  </div>
            </div>
      </section>
</template>

<style scoped>
      
</style>
