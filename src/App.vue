<template>
  <div id="app">
    <!-- Navigasi Utama -->
    <nav class="main-nav">
      <router-link to="/">Beranda</router-link> |
      <router-link to="/search">Cari Makanan</router-link> |
      <router-link to="/cart">Keranjang</router-link> |
      <router-link to="/profile">Profil</router-link>
    </nav>
    
    <!-- Konten Utama -->
    <router-view />
  </div>
</template>

<style>
.main-nav {
  padding: 20px;
  background: #f8f9fa;
  margin-bottom: 30px;
  text-align: center;
}

.main-nav a {
  margin: 0 10px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>