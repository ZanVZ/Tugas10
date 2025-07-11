<template>
  <div class="restaurant">
    <h1>Menu Makanan</h1>
    <div class="restaurant-grid">
      <div v-for="(item, index) in foods" :key="'food-' + index" class="card">
        <img :src="item.image" :alt="item.name" />
        <h2>{{ item.name }}</h2>
        <p class="price">Rp {{ item.price.toLocaleString() }}</p>
        <div class="rating">
          <span v-for="i in 5" :key="i" class="star">
            {{ i <= item.rating ? '⭐' : '☆' }}
          </span>
        </div>
        <div class="card-actions">
          <button @click="openQuantityModal(item)" class="order-btn">Pesan</button>
          <button @click="addToCartQuick(item)" class="cart-icon-btn">🛒</button>
        </div>
      </div>
    </div>

    <h1 style="margin-top: 40px;">Menu Minuman</h1>
    <div class="restaurant-grid">
      <div v-for="(item, index) in drinks" :key="'drink-' + index" class="card">
        <img :src="item.image" :alt="item.name" />
        <h2>{{ item.name }}</h2>
        <p class="price">Rp {{ item.price.toLocaleString() }}</p>
        <div class="rating">
          <span v-for="i in 5" :key="i" class="star">
            {{ i <= item.rating ? '⭐' : '☆' }}
          </span>
        </div>
        <div class="card-actions">
          <button @click="openQuantityModal(item)" class="order-btn">Pesan</button>
          <button @click="addToCartQuick(item)" class="cart-icon-btn">🛒</button>
        </div>
      </div>
    </div>

    <!-- Modal Input Jumlah -->
    <div v-if="selectedItem" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <h2>Masukkan Jumlah</h2>
        <img :src="selectedItem.image" class="modal-img" />
        <p><strong>{{ selectedItem.name }}</strong></p>
        <input type="number" v-model.number="selectedQuantity" min="1" class="qty-input" />
        <button @click="confirmOrder" class="order-btn">Konfirmasi</button>
         <button @click="goToDetail" class="order-btn">Detail</button>
        <button @click="closeModal" class="close-btn">Batal</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RestaurantView",
  data() {
    return {
      selectedItem: null,
      selectedQuantity: 1,
          foods: [
        {
          name: "Bakso Enak Banget",
          price: 20000,
          rating: 5,
          image: "https://us.123rf.com/450wm/andsx/andsx2303/andsx230300053/202185290-bakso-super-top-view-meatball-soup-with-noodles-indonesian-cuisine.jpg?ver=6"
        },
        {
          name: "Ayam Goreng Pedas",
          price: 25000,
          rating: 4,
          image: "https://us.123rf.com/450wm/akelomongkol/akelomongkol1807/akelomongkol180700004/105202213-pork-knuckle-or-german-pork-hocks-with-vegetable-and-fruit-served-with-sauce-on-chopping-board-and.jpg?ver=6"
        },
        {
          name: "Warung Sate Madura",
          price: 18000,
          rating: 4,
          image: "https://us.123rf.com/450wm/dani2405/dani24052303/dani2405230300077/207264460-chicken-satay-indonesian-food-malaysian-cuisine.jpg?ver=6"
        },
        {
          name: "Ramen Tokyo",
          price: 30000,
          rating: 5,
          image: "https://us.123rf.com/450wm/themess/themess2503/themess250310002/242580571-a-close-up-shot-of-a-steaming-bowl-of-ramen-the-noodles-are-being-lifted-with-chopsticks.jpg?ver=6"
        },
        {
          name: "Sushi Mori",
          price: 32000,
          rating: 5,
          image: "https://us.123rf.com/450wm/scyther5/scyther51606/scyther5160600011/57828073-sushi-roll-raw-makki-fresh-food-seafood-susi-stock-image.jpg?ver=6"
        },
        {
          name: "Nasi Goreng",
          price: 22000,
          rating: 3,
          image: "https://us.123rf.com/450wm/yamedesign/yamedesign2310/yamedesign231001145/216533235-indonesian-spicy-noodles-with-egg-on-white-plate-stock-photo.jpg?ver=6"
        },
        {
          name: "Mie Goreng",
          price: 20000,
          rating: 4,
          image: "https://us.123rf.com/450wm/iloveotto/iloveotto1702/iloveotto170200752/71582366-fried-noodle-asian-food-on-the-table.jpg?ver=6"
        },
        {
          name: "Seafood",
          price: 45000,
          rating: 5,
          image: "https://us.123rf.com/450wm/pixora/pixora2504/pixora250469016/244436742-food-dish-photography.jpg?ver=6"
        },
        {
          name: "Ikan Bakar",
          price: 45000,
          rating: 5,
          image: "https://us.123rf.com/450wm/greggr/greggr1208/greggr120802041/14788853-roasted-sea-fish-and-castors-on-wood-with-tomatoes-lemon-and-green-lettuce-salad.jpg?ver=6"
        },

    ],
    drinks: [

        // Tambahan 9 minuman
        {
          name: "Teh Manis",
          price: 5000,
          rating: 4,
          image: "https://us.123rf.com/450wm/paullynn/paullynn2002/paullynn200200023/139266632-coffee-cup-and-beans-top-view-with-copyspace-flat-lay-latte-for-menu-background-banner-and.jpg?ver=6"
        },
        {
          name: "Es Jeruk Segar",
          price: 6000,
          rating: 5,
          image: "https://us.123rf.com/450wm/tonobalaguer/tonobalaguer1205/tonobalaguer120500381/13872808-colorful-natural-fresh-fruits-juice-glasses-with-straw-stacked-in-rows.jpg?ver=6"
        },
        {
          name: "Kopi Hitam",
          price: 8000,
          rating: 4,
          image: "https://us.123rf.com/450wm/eowynphoto/eowynphoto2104/eowynphoto210400038/168111924-top-view-cup-of-coffee-with-scattered-coffee-beans.jpg?ver=6"
        },
        {
          name: "Cappuccino",
          price: 12000,
          rating: 5,
          image: "https://us.123rf.com/450wm/pjjaruwan/pjjaruwan1907/pjjaruwan190700029/127909062-cup-of-coffee-with-soft-microfoam-and-cinnamon-ground-on-marble-table.jpg?ver=6"
        },
        {
          name: "Jus Alpukat",
          price: 10000,
          rating: 5,
          image: "https://us.123rf.com/450wm/mirzamlk/mirzamlk2301/mirzamlk230100018/197841522-kesar-milk-or-saffron-milk-in-a-glass-along-with-saffron-spread-on-the-surface.jpg?ver=6"
        },
        {
          name: "Jus Mangga",
          price: 9000,
          rating: 4,
          image: "https://us.123rf.com/450wm/picsfive/picsfive1902/picsfive190200239/116143176-mango-smoothie-in-glass-on-wooden-background.jpg?ver=6"
        },
        {
          name: "Air Mineral",
          price: 4000,
          rating: 3,
          image: "https://us.123rf.com/450wm/opportunity2017/opportunity20171805/opportunity2017180500001/100781864-glass-of-water-with-ice-on-wood-table-background-in-restaurant.jpg?ver=6"
        },
        {
          name: "Soda Gembira",
          price: 7000,
          rating: 4,
          image: "https://us.123rf.com/450wm/helen53819/helen538191808/helen53819180800042/106153262-drink-for-hot-summer-days-fresh-ice-tea-in-a-glass-on-a-wooden-desk.jpg?ver=6"
        },
        {
          name: "Thai Tea",
          price: 10000,
          rating: 5,
          image: "https://us.123rf.com/450wm/yuliaff/yuliaff2409/yuliaff240900470/238317735-turkish-tea-with-dried-fruits.jpg?ver=6"
        }
      ]

    };
  },
  methods: {
    openQuantityModal(item) {
      this.selectedItem = item;
      this.selectedQuantity = 1;
    },
    closeModal() {
      this.selectedItem = null;
      this.selectedQuantity = 1;
    },
    confirmOrder() {
      if (this.selectedQuantity < 1) return alert("Jumlah minimal 1");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(i => i.name === this.selectedItem.name);
      if (existing) {
        existing.quantity += this.selectedQuantity;
      } else {
        cart.push({ ...this.selectedItem, quantity: this.selectedQuantity });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${this.selectedQuantity} x ${this.selectedItem.name} berhasil dipesan.`);
      this.closeModal();
    },
    addToCartQuick(item) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(i => i.name === item.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`1 x ${item.name} ditambahkan ke keranjang.`);
    },
goToDetail() {
  if (this.selectedItem) {
    this.$router.push(`/food/${encodeURIComponent(this.selectedItem.name)}`);
    this.closeModal();
  }
}

  }
};
</script>

<style scoped>
.restaurant {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.restaurant h1 {
  color: #ff6347;
  margin-bottom: 30px;
}

.restaurant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding-bottom: 10px;
}

.card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.card h2 {
  margin: 10px 0 5px;
  font-size: 1rem;
  color: #333;
}

.price {
  margin-bottom: 5px;
  color: #ff6347;
  font-weight: bold;
}

.rating {
  color: #ffc107;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.star {
  margin: 0 1px;
}

.card-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.order-btn {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.9rem;
}

.order-btn:hover {
  background-color: #e5533d;
}

.cart-icon-btn {
  background-color: #eee;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 6px 10px;
  transition: background-color 0.3s;
}

.cart-icon-btn:hover {
  background-color: #ddd;
}

/* Modal Style */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 360px;
  text-align: center;
}

.modal-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 15px;
}

.qty-input {
  width: 80px;
  padding: 6px;
  font-size: 1rem;
  text-align: center;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.close-btn {
  margin-top: 10px;
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #aaa;
}
</style>
