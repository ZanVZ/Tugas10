<template>
  <div class="search">
    <h1>Cari Makanan</h1>
    <input type="text" v-model="searchKeyword" placeholder="Ketik nama makanan...">
    <button class="btn-search">Cari</button>

    <div class="image-grid">
      <div v-for="(item, index) in filteredFoods" :key="index" class="image-item">
        <img :src="item.image" :alt="item.name" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <p v-if="filteredFoods.length === 0" class="no-result">Tidak ditemukan hasil</p>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
data() {
  return {
    searchKeyword: '',
    foods: [
      {
        name: 'Burger',
        image: 'https://us.123rf.com/450wm/kesu87/kesu871810/kesu87181000292/111456030-tasty-burger-with-french-fries-on-wooden-table.jpg?ver=6'
      },
      {
        name: 'Pizza',
        image: 'https://us.123rf.com/450wm/kamranaydinov/kamranaydinov2004/kamranaydinov200403471/144368534-pizza-with-tomato-and-mushrooms.jpg?ver=6'
      },
      {
        name: 'Salad',
        image: 'https://previews.123rf.com/images/mikkiorso/mikkiorso2504/mikkiorso250419225/244652130-close-up-of-hands-with-fresh-kale-salad-and-tomatoes-emphasizing-healthy-eating-and-diet-choices.jpg'
      },
      {
        name: 'Kebab',
        image: 'https://us.123rf.com/450wm/dar1930/dar19301903/dar1930190300254/118668849-tasty-wraps-filled-with-pulled-pork-and-salad.jpg?ver=6'
      },
      {
        name: 'Bakso Enak Banget',
        image: 'https://us.123rf.com/450wm/andsx/andsx2303/andsx230300053/202185290-bakso-super-top-view-meatball-soup-with-noodles-indonesian-cuisine.jpg?ver=6'
      },
      {
        name: 'Ayam Goreng Pedas',
        image: 'https://us.123rf.com/450wm/akelomongkol/akelomongkol1807/akelomongkol180700004/105202213-pork-knuckle-or-german-pork-hocks-with-vegetable-and-fruit-served-with-sauce-on-chopping-board-and.jpg?ver=6'
      },
      {
        name: 'Warung Sate Madura',
        image: 'https://us.123rf.com/450wm/dani2405/dani24052303/dani2405230300077/207264460-chicken-satay-indonesian-food-malaysian-cuisine.jpg?ver=6'
      },
      {
        name: 'Ramen Tokyo',
        image: 'https://us.123rf.com/450wm/themess/themess2503/themess250310002/242580571-a-close-up-shot-of-a-steaming-bowl-of-ramen-the-noodles-are-being-lifted-with-chopsticks.jpg?ver=6'
      },
      {
        name: 'Sushi Mori',
        image: 'https://us.123rf.com/450wm/scyther5/scyther51606/scyther5160600011/57828073-sushi-roll-raw-makki-fresh-food-seafood-susi-stock-image.jpg?ver=6'
      },
      {
        name: 'Nasi Goreng',
        image: 'https://us.123rf.com/450wm/yamedesign/yamedesign2310/yamedesign231001145/216533235-indonesian-spicy-noodles-with-egg-on-white-plate-stock-photo.jpg?ver=6'
      },
      {
        name: 'Kopi Hitam',
        image: 'https://us.123rf.com/450wm/ronnachaipark/ronnachaipark1711/ronnachaipark171100107/90357066-coffee-cup-and-coffee-beans-on-wood-table-warm-and-good-smell.jpg?ver=6'
      },
      {
        name: 'Seafood',
        image: 'https://us.123rf.com/450wm/pixora/pixora2504/pixora250469016/244436742-food-dish-photography.jpg?ver=6'
      }
    ]
  }
},

  computed: {
    filteredFoods() {
      const keyword = this.searchKeyword.toLowerCase()
      return this.foods.filter(food => food.name.toLowerCase().includes(keyword))
    }
  }
}
</script>

<style scoped>
.search {
  max-width: 960px;
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
  color: #ff6347;
}

.search input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #ddd;
  border-radius: 30px;
  font-size: 16px;
  transition: 0.3s ease;
  outline: none;
}

.search input[type="text"]:focus {
  border-color: #ff6347;
  box-shadow: 0 0 10px rgba(255, 99, 71, 0.3);
}

.btn-search {
  margin-top: 15px;
  background-color: #ff6347;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-search:hover {
  background-color: #e5533d;
}

.image-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
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

.no-result {
  margin-top: 20px;
  color: #888;
  font-style: italic;
}
</style>
