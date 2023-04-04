<script setup>

</script>

<template>
      <footer class="static bottom-0 flex flex-col w-full">
            <section class="bg-[#43A9D1] flex max-lg:flex-col max-lg:items-start flex-row justify-between pt-8 pb-8 text-white">
                  <ul class="flex flex-col max-lg:pl-8 pl-14">
                        <NuxtLink to="/" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Home</NuxtLink>
                        <NuxtLink to="/NosServices" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Nos Services</NuxtLink>
                        <NuxtLink to="/business-intelligence" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Business Intelligence</NuxtLink>
                        <NuxtLink to="/digital-online" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Digital Online</NuxtLink>
                        <NuxtLink to="/Carrière" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Carrière</NuxtLink>
                        <NuxtLink to="/Contact" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Contact</NuxtLink>
                        <NuxtLink to="/Blog" class="pb-2 text-[16px] hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">Blog</NuxtLink>
                  </ul>
                  <div class="flex flex-col justify-center max-lg:justify-start max-lg:pl-8 max-lg:pt-6  max-lg:pb-4"> 
                        <div class="flex flex-row items-center pb-3 justify-evenly">
                              <nuxt-img src="/phone-call.png" class="w-5"/>
                              <p><span class="hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">+32 2 544 04 45 </span> (Belgique)</p>
                        </div>
                        <p class="pb-3" ><span class="hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer">+352 621 47 17 46 </span> (Luxembourg)</p>
                        <div class="flex flex-row items-center pb-3 justify-evenly">
                              <!-- <nuxt-img src="/email.png" class="w-5"/> -->
                              <nuxt-img src="/email.png" class="w-5" />
                              <p class="hover:text-[#fc4349] hover:underline hover:underline-offset-4 cursor-pointer"> info@delomid-it.com</p>
                        </div>
                  </div>
                  <div class="pr-14 pb-3  max-lg:pl-8  max-lg:pt-4">
                        <input type="text" placeholder="Rechercher" class="p-3 rounded-lg text-black" />
                  </div>
            </section>

            <div class="flex justify-center  bg-[#384B5F] w-full">
                  <p class="text-[#9aa7b5] p-10 max-lg:text-center " >DELOMID IT AGENCY © 2022 All rights reserved.</p>
            </div>
      </footer>
</template>

<style scoped>
      
</style>
