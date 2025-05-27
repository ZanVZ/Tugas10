<template>
  <div class="search">
    <h1>Cari Makanan</h1>
    <input type="text" placeholder="Cari makanan...">
    <button class="btn-search">Cari</button>

    <div class="image-grid">
      <div class="image-item">
        <img src="@/assets/image/burger.jpg" alt="Burger" />
        <p>Burger</p>
      </div>
      <div class="image-item">
        <img src="@/assets/image/pizza.jpg" alt="Pizza" />
        <p>Pizza</p>
      </div>
      <div class="image-item">
        <img src="@/assets/image/salad.jpg" alt="Salad" />
        <p>Salad</p>
      </div>
      <div class="image-item">
        <img src="@/assets/image/th.jpg" alt="Sushi" />
        <p>Sushi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchView'
}
</script>

<style scoped>
.search {
  max-width: 600px;
  margin: 100px auto;
  padding: 2rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.search h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6347; /* sama dengan warna heading beranda */
}

.search input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #ddd;
  border-radius: 30px;
  font-size: 16px;
  transition: 0.3s ease;
  outline: none;
  box-shadow: inset 0 0 0 transparent;
}

.search input[type="text"]:focus {
  border-color: #ff6347; /* warna fokus sama dengan tombol beranda */
  box-shadow: 0 0 10px rgba(255, 99, 71, 0.3);
}

.btn-search {
  margin-top: 15px;
  background-color: #ff6347; /* warna tombol beranda */
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-search:hover {
  background-color: #e5533d; /* warna hover tombol beranda */
}

.image-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-grid img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.image-item p {
  margin-top: 8px;
  font-weight: 600;
  color: #333;
  text-align: center;
}
</style>
