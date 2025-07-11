<template>
  <div class="about">
    <h1>Tentang Restoran Kami</h1>
    <p>Selamat datang di Food Order, tempat di mana kelezatan makanan dan kenyamanan pelayanan berpadu untuk menciptakan pengalaman kuliner yang tak terlupakan.

Food Order hadir dari semangat untuk menyajikan hidangan terbaik bagi semua kalangan—baik untuk keluarga, pekerja sibuk, maupun pecinta kuliner sejati. Sejak berdiri, kami berkomitmen untuk menyediakan makanan berkualitas tinggi dengan bahan-bahan segar dan pilihan, diolah langsung oleh tim dapur kami yang berpengalaman dan penuh dedikasi.

Dengan menu yang beragam, mulai dari makanan tradisional Indonesia hingga minuman segar kekinian, kami ingin memastikan bahwa setiap pelanggan dapat menemukan sesuatu yang mereka sukai. Baik itu sepiring bakso hangat, seporsi ramen Jepang yang nikmat, hingga segelas jus alpukat yang menyegarkan—semuanya kami sajikan dengan sepenuh hati.

Tak hanya soal rasa, Food Order juga mengutamakan kenyamanan pelanggan. Dengan desain tempat yang hangat dan bersahabat, serta layanan pesan antar melalui platform digital, kami siap menemani Anda di mana pun berada—di rumah, di kantor, atau dalam perjalanan.

Di halaman galeri kami, Anda bisa melihat berbagai momen spesial yang tercipta di Food Order: mulai dari senyum pelanggan, suasana restoran, hingga hidangan-hidangan andalan kami.

Terima kasih telah mempercayakan momen makan Anda kepada Food Order. Bagi kami, makanan bukan sekadar santapan—tapi wujud cinta dan kebersamaan.

</p>

    <h2 style="margin-top: 40px;">Galeri Restoran</h2>
    <div class="gallery">
      <img v-for="(img, i) in images" :key="i" :src="img" :alt="'Foto ' + (i+1)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      images: [
        "https://us.123rf.com/450wm/xixinxing/xixinxing1406/xixinxing140600170/54610714-dining-room-with-elegant-table-settings.jpg?ver=6",
        "https://us.123rf.com/450wm/austler/austler2309/austler230902237/212172568-interior-of-a-restaurant-with-tables-chairs-and-chairs-in-vintage-style.jpg?ver=6",
        "https://us.123rf.com/450wm/melnyk58/melnyk582004/melnyk58200406628/145812259-behind-the-scenes-of-brands-the-chef-cooking-in-a-professional-kitchen-of-a-restaurant-meal-for.jpg?ver=6",
        "https://us.123rf.com/450wm/themorningglory/themorningglory1712/themorningglory171200281/92050501-parking-outdoor-background-with-many-car-and-tree.jpg?ver=6",
        "https://us.123rf.com/450wm/jinnaritt/jinnaritt1908/jinnaritt190800097/128555596-top-view-of-happiness-family-enjoy-eating-with-a-variety-of-seafood-dishes-on-dinner.jpg?ver=6",
        "https://us.123rf.com/450wm/bestyy38/bestyy382006/bestyy38200600342/149248842-blurred-images-of-restaurants-or-cafes-have-many-customers-blurred-background.jpg?ver=6"
      ]
    };
  }
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.about p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.gallery img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>
