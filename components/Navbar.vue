<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Scroll Logo
const width = ref(12)
const handleScroll = () => {
  const y  = useScrollY()
  if (y > 0) {
      width.value = 9
  }
  else{
      width.value = 12
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

//Searchbar
const active = ref("none")
const NotActive = ref("block")

function expandSearchbar(){
      active.value = "flex";
      NotActive.value = "none";
}

function closeSearchbar(){
      active.value = "none";
      NotActive.value = "block";
}

</script>

<template >
      <nav class="z-50 bg-[#2C3E50] flex flex-row items-center justify-around text-white sticky top-0 h-24 min-h-full">
            <div>
              <nuxt-link to="/">
                  <img src="https://www.delomid-it.com/wp-content/uploads/2019/03/Delomid_DATA_RVB_W1_PNG-1024x488.png" :style="{width: `${width}rem`, transition: `0.25s ease-in-out `}" class="hover:opacity-70" />
              </nuxt-link>
                </div>
            <div class="flex flex-row">
                  <nuxt-link to="/" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Home</nuxt-link>
                  <div class="subnav p-4">
                        <nuxt-link to="/NosServices" class="p-4 text-[18px] font-sans hover:text-[#FC4349] subnavbtn">Nos services</nuxt-link>
                        <div class="subnav-content">
                              <nuxt-link to="/NosServices/business-intelligence" >Business intelligence</nuxt-link>
                              <nuxt-link to="/NosServices/digital-online" >Digital online</nuxt-link>
                        </div>
                  </div>
                  <nuxt-link to="/Carrière" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Carrière</nuxt-link>
                  <nuxt-link to="/Contact" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Contact</nuxt-link>
                  <nuxt-link to="/Blog" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Blog</nuxt-link>
                  <nuxt-img src="/loupe.png" class="w-6 h-6 mt-5 hover:text-[#FC4349]" @click="expandSearchbar()" :style="{display: `${NotActive}`, transition: `2s ease-in-out `}" />
                  <div class="bg-[#43A9D1] rounded-lg h-10 flex-row items-center mt-2 " :style="{display: `${active}`, transition: `2s ease-in-out `}" >
                        <input type="text" placeholder="Rechercher" class="bg-transparent placeholder:text-white ml-4 focus-visible:outline-0" />
                        <nuxt-img src="/close.png" class="w-4 h-4 mr-2 z-50 " @click="closeSearchbar()"/>
                  </div>
            </div>
      </nav>
</template>

<style scoped>
.router-link-active {
  color:#43a9d1;
}

/* Add a red background color to navigation links on hover */
.navbar a:hover, .subnav:hover .subnavbtn {
  background-color:#2C3E50;
}

/* Style the subnav content - positioned absolute */
.subnav-content {
  display: none;
  position: absolute;
  background-color: #2C3E50;
  width: 20%;
  z-index: 1;
  padding-top: 15px;
  padding-bottom: 10px;
}

/* Style the subnav links */
.subnav-content a {
  margin-left: 30px;
  color: white;
  text-decoration: none;
  padding-bottom: 10px;
}

/* Add a grey background color on hover */
.subnav-content a:hover {
  background-color:#2C3E50 ;
  color: #FC4349;
  display: flex;
  flex-direction: column;
}

/* When you move the mouse over the subnav container, open the subnav content */
.subnav:hover .subnav-content {
  display: flex;
  flex-direction: column;
}
</style>
