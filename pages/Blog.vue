<script setup>
const articles = [
      {id:1, title:"Why Accessibility matters", date:"12 avril 2021", description:"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect. – Tim Berners-Lee, W3C Director and inventor of the World…", img:"https://www.delomid-it.com/wp-content/uploads/2021/04/web-3967926_1920-1-1024x594.jpg"},
      {id:2, title:"Competency center activities", date:"2 avril 2021", description:"Our competency center makes sure that our consultants are trained at the highest level to the most recent methods and technologies in order to ensure a high quality service to our clients. It is also responsible for partnerships that are made between Delomid and technologies actors.We have especially concluded a partnership with Talend that will allow Delomid consultants to be at the highest level of competencies regarding Talend Data Integration and Big Data.", img:"https://www.delomid-it.com/wp-content/uploads/2021/04/Competency-center-activities-1-1024x701.jpg"},
      {id:3, title:"Talend et Delomid unissent leur forces dans un partenariat", date:"29 Janvier 2021", description:"Cette année encore Talend et Delomid unissent leur forces dans un partenariat autour de l'utilisation des produits de Talend.", img:"https://www.delomid-it.com/wp-content/uploads/2021/01/siamak-signature.jpg"},
]
</script>

<template>
      <section class="bg-[#2C3E50] w-full h-24 flex flex-row max-lg:flex-col justify-between pl-52 max-lg:pl-4 max-lg:pb-32 pr-40 pt-8">
            <h2 class="text-white text-[28px] max-lg:text-[20px]">Blog</h2>
            <Breadcrumb />
      </section>

            <section class="flex flex-col xl:flex-row xl:flex-wrap xl:items-start bg-white pt-8 pb-8 items-center xl:justify-between">
                  <div class="w-5/6 xl:w-2/5 mb-8 xl:ml-16 xl:mr-16" v-for="article in articles" :key="article.id">
                        <nuxt-img :src="`${article.img}`"></nuxt-img>

                        <h5 class="mt-4 text-[1.2rem]">{{ article.title }}</h5>

                        <div class="flex flex-row pb-4 mt-4">
                              <i class="fa-regular fa-clock text-slate-400 text-sm"></i>
                              <p class="text-slate-400 text-sm ml-2 text">{{ article.date }}</p>
                        </div>

                        <p class="mb-4">{{ article.description }}</p>

                        <button class="text-black bg-[#e8e8e8] hover:bg-[#7049BA] w-32 pt-2 pb-2 rounded-lg">En savoir plus</button>
                  </div>

            </section>

</template>

<style scoped>
      
</style>
