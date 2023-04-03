<script setup>

</script>

<template>
       <section class="flex justify-center h-[150vh] bg-fixed bg-center relative bg-cover custom-img bg-[url('https://www.delomid-it.com/wp-content/uploads/2018/11/rawpixel-567016-unsplash.jpg')]">
            <div class="bg-black absolute h-[150vh] w-screen bg-opacity-80 flex flex-col pl-40 pt-28">
                  <h3 class="text-[34px] text-white">Offres d'emplois</h3>
                  <div class="parent">
                        <JobAnnounce class="div1" />
                        <JobAnnounce class="div2" />
                        <JobAnnounce class="div3" />
                        <JobAnnounce class="div4" />
                        <JobAnnounce class="div5" />
                        <JobAnnounce class="div6" />
                  </div>
            </div>
            </section>
</template>

<style scoped>
      .parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 3 / 1 / 4 / 2; }
.div6 { grid-area: 3 / 2 / 4 / 3; }
</style>
