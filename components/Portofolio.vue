<script setup>

</script>

<template>
      <section>
            <!-- Titre section -->
            <div class="flex flex-col items-center pt-16">
                  <h2 class="text-[34px]">Portofolio</h2>
                  <h5 class="text-[20px] mb-8 mt-6" >Aperçu de nos projet </h5>
                  <div class="h-px w-72 bg-black bg-opacity-10"></div>
            </div>
            <div class="flex flex-row items-start justify-evenly mt-8 mb-16">
                  <div class="flex flex-col justify-center items-center">
                        <h2 class="text-[24px] text-[#2c3e50]">Déploiement Talend</h2>
                        <h5>Architecture, conseil, déploiement et coaching</h5>
                        <nuxt-img src="talend-schema.png" />
                  </div>

                  <div class="flex flex-col justify-center items-center">
                        <h2 class="text-[24px] text-[#2c3e50]">Intégration d’applications</h2>
                        <h5>Cadrage, analyse et réalisation</h5>
                        <nuxt-img src="integration-logo.png" class="w-96" />
                  </div>

                  <div class="flex flex-col justify-center items-center">
                        <h2 class="text-[24px] text-[#2c3e50]">Customer Analytics</h2>
                        <h5>Conseil et réalisation</h5>
                        <nuxt-img src="customer-analytics.png" class="w-96" />
                  </div>
            </div>
      </section>
</template>

<style scoped>
      
</style>
