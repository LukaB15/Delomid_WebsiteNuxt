<script setup>

</script>

<template>
      <section class="bg-[#2C3E50] w-full h-24 flex flex-row justify-between pl-52 pr-40 pt-8">
            <h2 class="text-white text-[28px]">Nos services</h2>
            <Breadcrumb />
      </section>

      <section class="flex flex-col pt-16 pb-16" >
            <div class="flex flex-col items-center">
                  <h2 class="w-1/2 text-center text-[34px]">Delomid IT vous accompagne dans la réalisation de votre projet</h2>
            </div>

            <section class="flex flex-row justify-evenly">
                  <div class="flex flex-col items-center justify-center">
                        <div class="bg-transparent hover:bg-[#43a9d1] text-[#2da368] hover:text-white transition-all duration-150 hover:border border-[#43a9d1] rounded-full w-20 h-20 flex justify-center items-center">
                              <i class="fa-solid fa-pen text-4xl"></i>
                        </div>
                        <h5 class="text-[30px] pb-2">Conseil</h5>
                        <p class="text-center">
                              Cadrage projet<br>
                              Audit<br>
                              Etude faisabilité<br>
                              Processus<br>
                              Architecture<br>
                        </p>
                  </div>

                  <div class="flex flex-col items-center justify-center">
                        <div class="bg-transparent hover:bg-[#43a9d1] text-[#b0d13a] hover:text-white transition-all duration-150 hover:border border-[#43a9d1] rounded-full w-20 h-20 flex justify-center items-center">
                              <i class="fa-solid fa-code text-4xl"></i>
                        </div>
                        <h5 class="text-[30px] pb-2">Réalisation</h5>
                        <p class="text-center">
                              Analyse fonctionnelle<br>
                              Développement<br>
                              Tests<br>
                              Pilotage<br>
                        </p>
                  </div>

                  <div class="flex flex-col items-center justify-center">
                        <div class="bg-transparent hover:bg-[#43a9d1] text-[#f29437] hover:text-white transition-all duration-150 hover:border border-[#43a9d1] rounded-full w-20 h-20 flex justify-center items-center">
                              <i class="fa-solid fa-warehouse text-4xl"></i>
                        </div>
                        <h5 class="text-[30px] pb-2">Intégration</h5>
                        <p class="text-center">
                              Analyse de vos processus<br>
                              Etude de l’architecture<br>
                              existances<br>
                              Intégration de la solution de<br>
                              gestion des données
                        </p>
                  </div>

                  <div class="flex flex-col items-center justify-center">
                        <div class="bg-transparent hover:bg-[#43a9d1] text-[#b52929] hover:text-white transition-all duration-150 hover:border border-[#43a9d1] rounded-full w-20 h-20 flex justify-center items-center">
                              <i class="fa-solid fa-graduation-cap text-4xl"></i>
                        </div>
                        <h5 class="text-[30px] pb-2">Coaching</h5>
                        <p class="text-center">
                              Formation<br>
                              Support technique<br>
                              Gestion de changements<br>
                        </p>
                  </div>
            </section>

            <figure class="flex flex-col pt-20 w-4/6 ml-auto mr-auto">
                  <blockquote class="bg-[#eee] p-8 rounded-md">
                        <p class="text-[28px] italic">Construire une relation authentique avec nos clients.</p>
                  </blockquote>
                  <figcaption class="font-bold pt-8">Delomid team</figcaption>
            </figure>
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
