<template>
  <div class="detail-page">
    <div class="detail-card" v-if="item">
      <img :src="item.image" alt="gambar" class="detail-img" />
      <h2>{{ item.name }}</h2>
      <p class="price">Rp {{ item.price.toLocaleString() }}</p>
      <div class="rating">
        <span v-for="i in 5" :key="i">
          {{ i <= item.rating ? '⭐' : '☆' }}
        </span>
      </div>
      <p class="desc">Menu lezat pilihan terbaik kami. Segera pesan!</p>
      <button @click="addToCart(item)" class="order-btn">🛒 Tambah ke Keranjang</button>
      <router-link to="/" class="back-btn">⬅ Kembali</router-link>
    </div>
    <div v-else>
      <p>Menu tidak ditemukan.</p>
      <router-link to="/" class="back-btn">⬅ Kembali</router-link>
    </div>
  </div>
</template>

<script>
import { restaurants } from "@/data/restaurants";
import { drinks } from "@/data/drinks";

export default {
  name: "FoodDetail",
  data() {
    return {
      item: null
    };
  },
  created() {
    const name = decodeURIComponent(this.$route.params.name);
    const allMenus = [...restaurants, ...drinks];
    this.item = allMenus.find(i => i.name === name);
  },
  methods: {
    addToCart(item) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(i => i.name === item.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`1 x ${item.name} ditambahkan ke keranjang.`);
    }
  }
};
</script>

<style scoped>
.detail-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}
.detail-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.detail-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}
.price {
  color: #ff6347;
  font-weight: bold;
  margin: 10px 0;
}
.rating {
  color: #ffc107;
  font-size: 1.1rem;
}
.desc {
  margin: 20px 0;
}
.order-btn {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
.back-btn {
  display: inline-block;
  margin-top: 20px;
  color: #555;
  text-decoration: none;
}
</style>
