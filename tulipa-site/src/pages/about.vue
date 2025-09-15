<template>
  <div>
    <AppNavbar />
    <main class="about-container">
      <h1>About Tulipa</h1>
      <p>
        Tulipa is an innovative platform created through a collaboration between TNO and the eScience Center. 
        Its mission is to empower researchers and organizations with advanced tools for data analysis and visualization. 
        By combining expertise from both TNO and eScience, Tulipa delivers robust solutions to accelerate scientific discovery and technological advancement.
      </p>
    </main>
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>