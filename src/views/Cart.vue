<template>
  <div class="cart-container">
    <h1>Keranjang Belanja</h1>
    
    <div v-if="cartItems.length > 0" class="cart-items">
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>Rp {{ item.price.toLocaleString() }}</p>
          <div class="quantity-control">
            <button @click="decreaseQuantity(index)">-</button>
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
      <router-link to="/search" class="shop-link">Cari Makanan</router-link>
    </div>
  </div>
</template>

<script>

import sushiImg from '@/assets/image/th.jpg'
import pizzaImg from '@/assets/image/pizza.jpg'
import burgerImg from '@/assets/image/burger.jpg'
import saladImg from '@/assets/image/salad.jpg'

export default {
  name: "CartView",
  data() {
    return {
      cartItems: [
        {
          name: "Sushi",
          price: 35000,
          quantity: 2,
          image: sushiImg,
        },
        {
          name: "Pizza",
          price: 45000,
          quantity: 1,
          image: pizzaImg,
        },
         {
          name: "Burger",
          price: 45000,
          quantity: 1,
          image: burgerImg,
        },
         {
          name: "Salad",
          price: 45000,
          quantity: 1,
          image: saladImg,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    checkout() {
      alert(`Pesanan sebesar Rp ${this.totalPrice.toLocaleString()} berhasil dibuat!`);
      this.cartItems = [];
    },
  },
};
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cart-container h1 {
  color: #ff6347;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
}


.cart-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.cart-item {
  flex: 0 0 300px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 12px;
  background-color: #fff;
}


.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

.item-details h3 {
  margin: 0;
  font-weight: 600;
  color: #333;
}

.item-details p {
  margin: 4px 0 0;
  color: #777;
}

.quantity-control {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-control button {
  width: 30px;
  height: 30px;
  background: #f0f0f0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 700;
  color: #ff6347;
}

.quantity-control button:hover {
  background-color: #ff6347;
  color: white;
}

.quantity-control span {
  margin: 0 12px;
  font-weight: 600;
  font-size: 1rem;
  color: #555;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #ff6347;
  transition: color 0.3s ease;
}

.remove-btn:hover {
  color: #e5533d;
}

.cart-summary {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

.cart-summary h3 {
  font-weight: 700;
  font-size: 1.3rem;
  color: #ff6347;
}

.checkout-btn {
  background: #ff6347;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: 700;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #e5533d;
}

.empty-cart {
  text-align: center;
  margin-top: 50px;
  color: #555;
  font-size: 1.1rem;
  font-weight: 600;
}

.shop-link {
  display: inline-block;
  margin-top: 15px;
  color: #ff6347;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

.shop-link:hover {
  color: #e5533d;
}
</style>
