<script setup>

</script>

<template>
      <section class="bg-[#2C3E50] w-full h-24 flex flex-row max-lg:flex-col justify-between pl-52 max-lg:pl-4 max-lg:pb-32 pr-40 pt-8">
            <h2 class="text-white text-[28px] max-lg:text-[20px]">Nos services</h2>
            <Breadcrumb />
      </section>

      <section class="flex flex-col pt-16 pb-16 max-lg:pt-8" >
            <div class="flex flex-col items-center">
                  <h2 class="w-1/2 text-center text-[34px] max-lg:text-[25px] max-lg:w-2/3">Delomid IT vous accompagne dans la réalisation de votre projet</h2>
            </div>

            <Services />

            <Quote />
      </section>
</template>

<style scoped>
      blockquote p::before {
    content: '\201C';
}

blockquote p::after {
    content: '\201D';
}

</style>
