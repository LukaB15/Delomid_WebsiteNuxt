<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const breadcrumbLinks = ref([])

const route = useRoute()

const routeSegments = computed(() => route.path.split('/').filter(Boolean))

routeSegments.value.reduce((accumulator, segment) => {
  const link = `${accumulator}/${segment}`
  breadcrumbLinks.value.push({ path: link, name: segment })
  return link
}, '')
</script>

<template>
      <nav aria-label="breadcrumb">
  <div class="breadcrumb flex flex-row text-white">
      <p><nuxt-link to="/" class="accueil">Accueil </nuxt-link></p>
    <template v-for="(link, index) in breadcrumbLinks" :key="index">
      <p class="breadcrumb-item">
        <nuxt-link :to="link.path"> {{ link.name }}</nuxt-link>
      </p>
    </template>
  </div>
</nav>
</template>

<style scoped>
      .breadcrumb {
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '›';
  margin: 0 0.5rem;
}
.accueil::after{
      content: '›';
  margin: 0 0.5rem;
}


</style>
