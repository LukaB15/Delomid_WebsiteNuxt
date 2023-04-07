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

const menuOpen = ref(false)
const mobileactive = ref("block")
const closemobileactive = ref("none")

function activemenu() {
  mobileactive.value = "none";
  closemobileactive.value = "block"
}
function closeactivemenu(){
  mobileactive.value = "block"
  closemobileactive.value = "none"
}
function openmenu(){
  menuOpen.value= true
}
function closemenu(){
  menuOpen.value = false
}
</script>

<template >
      <nav class="max-lg:hidden z-50 bg-[#2C3E50] flex flex-row items-center justify-around text-white sticky top-0 h-24 min-h-full">
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
                  <nuxt-link to="/Carriere" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Carrière</nuxt-link>
                  <nuxt-link to="/Contact" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Contact</nuxt-link>
                  <nuxt-link to="/Blog" class="p-4 text-[18px] font-sans hover:text-[#FC4349]">Blog</nuxt-link>
                  <nuxt-img src="/loupe.png" class="w-6 h-6 mt-5 hover:text-[#FC4349]" @click="expandSearchbar()" :style="{display: `${NotActive}`, transition: `2s ease-in-out `}" />
                  <div class="bg-[#43A9D1] rounded-lg h-10 flex-row items-center mt-2 " :style="{display: `${active}`, transition: `2s ease-in-out `}" >
                        <input type="text" placeholder="Rechercher" class="bg-transparent placeholder:text-white ml-4 focus-visible:outline-0" />
                        <nuxt-img src="/close.png" class="w-4 h-4 mr-2 z-50 " @click="closeSearchbar()"/>
                  </div>
            </div>
      </nav>
  <nav class="hidden max-lg:flex flex-row items-center justify-between h-24 bg-[#2C3E50] pb-4">
    <div class="col-xs-6">
      <div>
          <nuxt-link to="/" @click="closemenu(),closeactivemenu()">
            <img src="https://www.delomid-it.com/wp-content/uploads/2019/03/Delomid_DATA_RVB_W1_PNG-1024x488.png"  class="hover:opacity-70 w-36" />
          </nuxt-link>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="flex flex-row">
            <div class="space-y-2 mr-4" type="button" @click="activemenu(),openmenu()" :style="{display: `${mobileactive}`, transition: `2s ease-in-out `}">
              <div class="w-8 h-0.5 bg-white"></div>
              <div class="w-8 h-0.5 bg-white"></div>
              <div class="w-8 h-0.5 bg-white"></div>
            </div>
            <nuxt-img src="/close.png" class="w-6 h-6 mr-6 z-50 " @click="closeactivemenu(),closemenu()" :style="{display: `${closemobileactive}`, transition: `2s ease-in-out `}"/>
            <nuxt-img src="/loupe.png" class="w-6 h-6 mr-4" @click="expandSearchbar()" :style="{display: `${NotActive}`, transition: `2s ease-in-out `}" />
          </div>
        </div>
  </nav>
  <div class="row dropdown" :class="{ 'dropdown-after' : menuOpen }">
    <ul class="navlist">
      <li class="navlistitem" @click="closemenu(),closeactivemenu()">
        <nuxt-link to="/Nosservices">Nos services</nuxt-link>
      </li>
      <li class="navlistitem" @click="closemenu(),closeactivemenu()">
        <nuxt-link to="/Carriere">Carrière</nuxt-link>
      </li>
      <li class="navlistitem" @click="closemenu(),closeactivemenu()">
        <nuxt-link to="/Contact">Contact</nuxt-link>
      </li>
      <li class="navlistitem" @click="closemenu(),closeactivemenu()">
        <nuxt-link to="/Blog">Blog</nuxt-link>
      </li>
    </ul>
  </div>

      
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

.logo1 {
  color: red;
}

.logo2 {
  color: grey;
}

.logo,
.hamburger-wrap {
  width: 100px;
  height: 100%;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  align-items: center;
}

.hamburger-wrap {
  float: right;
  justify-content: flex-end;
}

.hamburger {
  width: 45px;
  height: 45px;
  background-color: black;
  border-radius: 4px;
}

.hamburger:focus {
  outline: none;
}

.hamburger__line,
.hamburger__middle {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #FFFFFF;
  margin-top: 7px;
  margin-bottom: 7px;
}

.hamburger__middle {
  width: 20px;
  margin-left: 10px;
}

.dropdown {
  margin-top: -20px;
  height: 0px;
  background-color: #2C3E50;
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 999;
}

.dropdown-after {
  height: 18rem;
  transition: height 0.2s ease;
}

.navlist {
  list-style: none;
}

.navlistitem {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.navlistitem a {
  color: #FFFFFF;
}





</style>
