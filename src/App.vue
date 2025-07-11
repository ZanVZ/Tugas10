<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <!-- ✅ Navbar baru yang menarik -->
    <Navbar />

    <!-- Konten Halaman -->
    <router-view />
  </div>
</template>
