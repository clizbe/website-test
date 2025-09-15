<template>
  <nav class="app-navbar">
    <div class="navbar-left">
      <img src="@/assets/logo.png" alt="Logo" class="navbar-icon" />
      <span class="navbar-title" style="color: black; font-size: 1.8rem; font-weight: bold; margin-left: 0.75rem; letter-spacing: 1px;">
        <span style="font-family: 'Inter', sans-serif;">
          Tulipa Energy
        </span>
      </span>
    </div>
    <div class="navbar-links-wrapper" style="margin-left:auto;">
      <ul class="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="https://github.com/TulipaEnergy/TulipaEnergyModel.jl" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://tulipaenergy.github.io/TulipaEnergyModel.jl/stable/" target="_blank" rel="noopener">Docs</a></li>
      <li><a href="/about">About</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// No script needed for static navbar
</script>

<style scoped>
.app-navbar {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.navbar-left {
  margin-right: 2rem;
}

.navbar-icon {
  width: 32px;
  height: 32px;
}

.navbar-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-links li {
  margin-right: 1.5rem;
}

.navbar-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.navbar-links a:hover {
  color: #007bff;
}
</style>
