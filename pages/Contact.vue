<script setup>

</script>

<template>
     <section class="bg-[#2C3E50] w-full h-24 flex flex-row max-lg:flex-col justify-between pl-52 max-lg:pl-4 max-lg:pb-32 pr-40 pt-8">
            <h2 class="text-white text-[28px] max-lg:text-[20px]">Contact</h2>
            <Breadcrumb />
      </section> 

      <section class="flex flex-col pl-4 pr-4 pt-8 xl:pl-52">
            <h3 class="text-[24px] xl:text-[34px]">Retrouvez nous sur les réseaux sociaux</h3>

            <SocialNetwork />

            <div class="h-px w-72 bg-black bg-opacity-10 mb-4"></div>

            <h3 class="text-[24px]">Informations de contact</h3>

           <ContactInfo />
      </section>
</template>

<style scoped>
      
</style>
