<template>
  <div class="home">
    <div class="overlay">
      <h2 class="logo">🍔 FoodOrder</h2>
      <h1>Selamat Datang di FoodOrder</h1>
      <p>Pesan makanan favoritmu hanya dengan beberapa klik!</p>
      <router-link to="/restaurant" class="cta">Lihat Menu</router-link>
    </div>
  </div>
</template>

<script setup>
import makanan from '@/assets/image/oke.jpg'
</script>

<style scoped>
.home {
  background-image: url('@/assets/image/oke.jpg');
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  color: white;
}

.logo {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffcb05;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.cta {
  margin-top: 1rem;
  display: inline-block;
  background: #ff6b6b;
  color: white;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background 0.3s ease;
}

.cta:hover {
  background: #e04e4e;
}
</style>
