<template>
  <nav class="navbar">
    <div class="logo">🍔 FoodOrder</div>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/restaurant">Menu</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <div class="profile-icon">
      <router-link to="/search" class="icon-link" title="Cari Makanan">🔍</router-link>
      <router-link to="/profile" class="icon-link" title="Profil">👤</router-link>
    </div>
  </nav>
</template>


<style scoped>
.navbar {
  background-color: #ff6b6b;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}

.profile-icon {
  display: flex;
  gap: 1rem;
}

.icon-link {
  font-size: 1.6rem;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.icon-link:hover {
  transform: scale(1.2);
}
</style>
