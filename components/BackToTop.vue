<script setup>
      import { ref, onMounted, onUnmounted } from 'vue'

      const showButton = ref(false)

      const handleScroll = () => {
      const y  = useScrollY()
      if (y > 100) {
            showButton.value = true
      }
      else{
            showButton.value = false
      }
      };

      const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      })

      onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      })
</script>

<template>
      <button @click="scrollToTop" v-if="showButton" class="bg-black bg-opacity-40 rounded-lg">
            <nuxt-img src="arrowhead-up.png" class="w-12"></nuxt-img>
      </button>
</template>
