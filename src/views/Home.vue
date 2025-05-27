<template>
  <div class="home">
    <div class="hero">
      <h1>Selamat Datang di MakanYuk!</h1>
      <p>Temukan dan pesan makanan favoritmu dengan mudah, cepat, dan lezat 🍽️</p>
      <button>Jelajahi Menu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(to right, #ffecd2, #fcb69f);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.hero h1 {
  font-size: 2.5rem;
  color: #ff6347;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 24px;
}

.hero button {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hero button:hover {
  background-color: #e5533d;
}
</style>
