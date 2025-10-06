<template>
  <div>
    <AppNavbar />
    <main class="about-container">
      <h1>About Tulipa</h1>
      <p>
        Tulipa is a group of free analytical tools to support data-driven policy analysis and decision-making in the energy transition - with special focus on the electricity market and its coupling with other energy sectors (e.g., hydrogen, heat, natural gas, etc.).
        Tulipa is being developed by TNO and the Netherlands eScience Center, with contributions from TU Delft and Utrecht University, and is financed by TNO and NWO.
        Tulipa supports the United Nations' Sustainable Development Goals, specifically Goal 7: Affordable and Clean Energy.
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
