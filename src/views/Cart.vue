<template>
  <div class="cart-container">
    <h1>Keranjang Belanja</h1>

    <div v-if="cartItems.length > 0" class="cart-items">
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="item-image" />

        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p class="price">Rp {{ item.price.toLocaleString() }}</p>
          <div class="quantity-control">
            <button @click="decreaseQuantity(index)">−</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
        </div>

        <button @click="removeItem(index)" class="remove-btn">×</button>
      </div>

      <div class="cart-summary">
        <h3>Total: Rp {{ totalPrice.toLocaleString() }}</h3>
        <button @click="checkout" class="checkout-btn">Checkout</button>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Keranjang belanja Anda kosong</p>
      <router-link to="/restaurant" class="shop-link">Lihat Menu</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      cartItems: []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.saveToLocalStorage();
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.saveToLocalStorage();
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      this.saveToLocalStorage();
    },
    checkout() {
      alert(`Pesanan sebesar Rp ${this.totalPrice.toLocaleString()} berhasil dibuat!`);
      this.cartItems = [];
      localStorage.removeItem("cart");
    },
    saveToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    loadFromLocalStorage() {
      const stored = JSON.parse(localStorage.getItem("cart"));
      if (stored && Array.isArray(stored)) {
        this.cartItems = stored;
      }
    }
  },
  mounted() {
    this.loadFromLocalStorage();
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #ff6347;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  position: relative;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.price {
  color: #ff6347;
  font-weight: bold;
  margin: 5px 0;
}

.quantity-control {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.quantity-control button {
  background: #ff6347;
  border: none;
  color: #fff;
  width: 28px;
  height: 28px;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
}

.quantity-control span {
  margin: 0 10px;
  font-weight: bold;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 22px;
  color: #999;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
}

.remove-btn:hover {
  color: #ff0000;
}

.cart-summary {
  margin-top: 30px;
  text-align: right;
}

.cart-summary h3 {
  font-size: 1.3rem;
  color: #333;
}

.checkout-btn {
  background: #ff6347;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
}

.checkout-btn:hover {
  background-color: #e5533d;
}

.empty-cart {
  text-align: center;
  color: #777;
  margin-top: 40px;
  font-size: 1.1rem;
}

.shop-link {
  display: inline-block;
  margin-top: 10px;
  color: #ff6347;
  text-decoration: none;
  font-weight: bold;
}

.shop-link:hover {
  color: #e5533d;
}
</style>
