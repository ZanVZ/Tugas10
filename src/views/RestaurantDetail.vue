<template>
  <div class="detail-container">
    <div class="detail-card">
      <img :src="restaurant.image" :alt="restaurant.name" class="detail-image" />
      <div class="detail-info">
        <h1>{{ restaurant.name }}</h1>
        <p class="price" v-if="restaurant.price">Harga: Rp {{ restaurant.price.toLocaleString() }}</p>
        <p class="description" v-if="restaurant.price">
          Nikmati sajian spesial dari <strong>{{ restaurant.name }}</strong> yang dibuat dengan bahan-bahan pilihan dan rasa autentik yang menggugah selera.
        </p>
        <p v-else>Maaf, menu tidak ditemukan.</p>
        <router-link to="/restaurant" class="back-button">Kembali ke Menu</router-link>
      </div>
    </div>

    <div v-if="restaurant.price" class="reviews">
      <h2>Ulasan Pengunjung</h2>
      <div v-for="(review, index) in reviews" :key="index" class="review-item">
        <p class="reviewer">{{ review.name }}:</p>
        <div class="rating">
          <span v-for="i in 5" :key="i">
            {{ i <= review.rating ? '⭐' : '☆' }}
          </span>
        </div>
        <p class="review-text">"{{ review.comment }}"</p>
      </div>
    </div>

    <div v-if="restaurant.price" class="add-review">
      <h3>Tambahkan Ulasan Anda</h3>
      <form @submit.prevent="submitReview">
        <input v-model="newReview.name" type="text" placeholder="Nama Anda" required />
        <select v-model.number="newReview.rating" required>
          <option disabled value="">Pilih Rating</option>
          <option v-for="i in 5" :key="i" :value="i">{{ i }} ⭐</option>
        </select>
        <textarea v-model="newReview.comment" placeholder="Tulis komentar..." required></textarea>
        <button type="submit">Kirim Ulasan</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantDetail',
  data() {
    return {
      restaurant: null,
      reviews: [],
      newReview: {
        name: '',
        rating: '',
        comment: ''
      },
      allRestaurants: [
        { name: "Bakso Enak Banget", price: 20000, image: "https://us.123rf.com/450wm/andsx/andsx2303/andsx230300053/202185290-bakso-super-top-view-meatball-soup-with-noodles-indonesian-cuisine.jpg?ver=6" },
        { name: "Ayam Goreng Pedas", price: 25000, image: "https://us.123rf.com/450wm/akelomongkol/akelomongkol1807/akelomongkol180700004/105202213-pork-knuckle-or-german-pork-hocks-with-vegetable-and-fruit-served-with-sauce-on-chopping-board-and.jpg?ver=6" },
        { name: "Warung Sate Madura", price: 18000, image: "https://us.123rf.com/450wm/dani2405/dani24052303/dani2405230300077/207264460-chicken-satay-indonesian-food-malaysian-cuisine.jpg?ver=6" },
        { name: "Ramen Tokyo", price: 30000, image: "https://us.123rf.com/450wm/themess/themess2503/themess250310002/242580571-a-close-up-shot-of-a-steaming-bowl-of-ramen-the-noodles-are-being-lifted-with-chopsticks.jpg?ver=6" },
        { name: "Sushi Mori", price: 32000, image: "https://us.123rf.com/450wm/scyther5/scyther51606/scyther5160600011/57828073-sushi-roll-raw-makki-fresh-food-seafood-susi-stock-image.jpg?ver=6" },
        { name: "Nasi Goreng", price: 22000, image: "https://us.123rf.com/450wm/yamedesign/yamedesign2310/yamedesign231001145/216533235-indonesian-spicy-noodles-with-egg-on-white-plate-stock-photo.jpg?ver=6" },
        { name: "Mie Goreng", price: 20000, image: "https://us.123rf.com/450wm/iloveotto/iloveotto1702/iloveotto170200752/71582366-fried-noodle-asian-food-on-the-table.jpg?ver=6" },
        { name: "Seafood", price: 45000, image: "https://us.123rf.com/450wm/pixora/pixora2504/pixora250469016/244436742-food-dish-photography.jpg?ver=6" },
        { name: "Ikan Bakar", price: 25000, image: "https://us.123rf.com/450wm/greggr/greggr1208/greggr120802041/14788853-roasted-sea-fish-and-castors-on-wood-with-tomatoes-lemon-and-green-lettuce-salad.jpg?ver=6" }
      ],
      drinks: [
        { name: "Teh Manis", price: 5000, image: "https://us.123rf.com/450wm/paullynn/paullynn2002/paullynn200200023/139266632-coffee-cup-and-beans-top-view-with-copyspace-flat-lay-latte-for-menu-background-banner-and.jpg?ver=6" },
        { name: "Es Jeruk Segar", price: 6000, image: "https://us.123rf.com/450wm/tonobalaguer/tonobalaguer1205/tonobalaguer120500381/13872808-colorful-natural-fresh-fruits-juice-glasses-with-straw-stacked-in-rows.jpg?ver=6" },
        { name: "Kopi Hitam", price: 8000, image: "https://us.123rf.com/450wm/eowynphoto/eowynphoto2104/eowynphoto210400038/168111924-top-view-cup-of-coffee-with-scattered-coffee-beans.jpg?ver=6" },
        { name: "Cappuccino", price: 12000, image: "https://us.123rf.com/450wm/pjjaruwan/pjjaruwan1907/pjjaruwan190700029/127909062-cup-of-coffee-with-soft-microfoam-and-cinnamon-ground-on-marble-table.jpg?ver=6" },
        { name: "Jus Alpukat", price: 10000, image: "https://us.123rf.com/450wm/mirzamlk/mirzamlk2301/mirzamlk230100018/197841522-kesar-milk-or-saffron-milk-in-a-glass-along-with-saffron-spread-on-the-surface.jpg?ver=6" },
        { name: "Jus Mangga", price: 9000, image: "https://us.123rf.com/450wm/picsfive/picsfive1902/picsfive190200239/116143176-mango-smoothie-in-glass-on-wooden-background.jpg?ver=6" },
        { name: "Air Mineral", price: 4000, image: "https://us.123rf.com/450wm/opportunity2017/opportunity20171805/opportunity2017180500001/100781864-glass-of-water-with-ice-on-wood-table-background-in-restaurant.jpg?ver=6" },
        { name: "Soda Gembira", price: 7000, image: "https://us.123rf.com/450wm/helen53819/helen538191808/helen53819180800042/106153262-drink-for-hot-summer-days-fresh-ice-tea-in-a-glass-on-a-wooden-desk.jpg?ver=6" },
        { name: "Thai Tea", price: 10000, image: "https://us.123rf.com/450wm/yuliaff/yuliaff2409/yuliaff240900470/238317735-turkish-tea-with-dried-fruits.jpg?ver=6" }
      ]
    };
  },
  methods: {
    submitReview() {
      if (this.newReview.name && this.newReview.rating && this.newReview.comment) {
        this.reviews.push({ ...this.newReview });
        this.newReview.name = '';
        this.newReview.rating = '';
        this.newReview.comment = '';
      }
    }
  },
  created() {
    const nameParam = decodeURIComponent(this.$route.params.name).toLowerCase();
    const allItems = [...this.allRestaurants, ...this.drinks];
    const found = allItems.find(item => item.name.toLowerCase() === nameParam);
    this.restaurant = found || {
      name: 'Menu Tidak Ditemukan',
      price: null,
      image: 'https://via.placeholder.com/400x200?text=Menu+Tidak+Ditemukan'
    };

    if (found && found.price <= 10000) {
      this.reviews = [
        { name: 'Sari', comment: 'Minumannya segar dan manisnya pas.', rating: 5 },
        { name: 'Yusuf', comment: 'Cocok banget diminum saat siang hari, bikin adem!', rating: 4 },
        { name: 'Nina', comment: 'Porsinya pas dan rasa buahnya terasa alami.', rating: 5 }
      ];
    } else if (found) {
      this.reviews = [
        { name: 'Andi', comment: 'Rasanya mantap! Porsinya pas dan pelayanannya ramah.', rating: 5 },
        { name: 'Dewi', comment: 'Saya suka sekali dengan bumbunya, terasa sekali rempah-rempahnya.', rating: 4 },
        { name: 'Budi', comment: 'Harganya terjangkau dan kualitas makanannya sangat baik.', rating: 5 }
      ];
    }
  }
};
</script>

<style scoped>
/* Styling sama seperti yang kamu buat sebelumnya */
.detail-container {
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
}
.detail-card {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
.detail-image {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
}
.detail-info {
  padding: 1.5rem;
}
.detail-info h1 {
  color: #ff6347;
  margin-bottom: 1rem;
}
.price {
  font-weight: bold;
  color: #e5533d;
  margin-bottom: 1rem;
}
.description {
  color: #555;
  line-height: 1.6;
}
.back-button {
  display: inline-block;
  margin-top: 1.5rem;
  background: #ff6347;
  color: white;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
}
.reviews {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
}
.reviews h2 {
  margin-bottom: 1rem;
  color: #444;
}
.review-item {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}
.reviewer {
  font-weight: bold;
  color: #333;
}
.review-text {
  font-style: italic;
  color: #666;
  margin-top: 5px;
}
.rating {
  color: #ffc107;
  font-size: 1.1rem;
}
.add-review {
  margin-top: 2rem;
  background: #fff7f0;
  padding: 1rem;
  border-radius: 10px;
}
.add-review h3 {
  margin-bottom: 1rem;
  color: #e5533d;
}
.add-review form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.add-review input,
.add-review select,
.add-review textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.add-review button {
  align-self: flex-start;
  padding: 8px 16px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.add-review button:hover {
  background-color: #e5533d;
}
</style>
