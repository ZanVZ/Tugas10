<template>
  <div class="profile-container">
    <h1 class="gradient-title">👤 Profil Pengguna</h1>

    <div class="profile-card">
      <div class="avatar">
        <img src="https://us.123rf.com/450wm/romablack/romablack1911/romablack191100150/136165813-a-young-woman-hiker-in-a-blue-jacket-standing-in-the-mountains-on-sunse.jpg?ver=6" alt="Profile Picture" />
        <button @click="changePhoto" class="change-photo-btn">Ubah Foto</button>
      </div>

      <div class="profile-form">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input type="text" v-model="profile.name" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="profile.email" />
        </div>
        <div class="form-group">
          <label>Nomor Telepon</label>
          <input type="tel" v-model="profile.phone" />
        </div>
        <div class="form-group">
          <label>Alamat</label>
          <textarea v-model="profile.address" rows="3"></textarea>
        </div>
        <button @click="saveProfile" class="save-btn">💾 Simpan Perubahan</button>
      </div>
    </div>

    <div class="order-history">
      <h2>🧾 Riwayat Pesanan</h2>
      <div v-if="orders.length > 0" class="orders">
        <div v-for="(order, index) in orders" :key="index" class="order-item">
          <div class="order-header">
            <div><strong>#{{ order.id }}</strong></div>
            <div class="order-date">{{ order.date }}</div>
          </div>
          <div class="order-details">
            <p>{{ order.items }} item • Total: <strong>Rp {{ order.total.toLocaleString() }}</strong></p>
            <span class="order-status" :class="order.status">{{ order.status }}</span>
          </div>
        </div>
      </div>
      <p v-else class="no-orders">Belum ada riwayat pesanan</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      profile: {
        name: 'zan',
        email: 'zan@gmail.com',
        phone: '123456789012',
        address: 'jl karya1'
      },
      orders: [
        {
          id: 'P1111',
          date: '27 Mei 2025',
          status: 'Selesai',
          items: 3,
          total: 95000
        },
        {
          id: 'ORD-12344',
          date: '25 Mei 2025',
          status: 'Dibatalkan',
          items: 2,
          total: 50000
        }
      ]
    }
  },
  methods: {
    saveProfile() {
      alert('Profil berhasil disimpan!')
    },
    changePhoto() {
      alert('Fungsi ubah foto akan diimplementasikan')
    }
  }
}
</script>

<style scoped>
.profile-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(145deg, #fffaf0, #ffe4e1);
  border-radius: 20px;
  box-shadow: inset 0 0 100px rgba(255, 240, 240, 0.3);
  animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.gradient-title {
  text-align: center;
  font-size: 2.3rem;
  background: linear-gradient(to right, #ff6347, #e43f5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 30px;
}

.profile-card {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.07);
  margin-bottom: 40px;
  transition: 0.3s ease-in-out;
}

.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.08);
}

.avatar {
  text-align: center;
  flex: 1 1 180px;
}

.avatar img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 4px solid #ff6347;
  object-fit: cover;
}

.change-photo-btn {
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #ff6347;
  color: #ff6347;
  padding: 8px 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.change-photo-btn:hover {
  background-color: #ff6347;
  color: white;
}

.profile-form {
  flex: 2;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #444;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fff;
}

.save-btn {
  margin-top: 10px;
  background: linear-gradient(to right, #ff6347, #e43f5a);
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.save-btn:hover {
  opacity: 0.9;
}

.order-history {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.order-history h2 {
  text-align: center;
  color: #ff6347;
  margin-bottom: 20px;
}

.orders {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-item {
  background: #fff8f6;
  border-left: 5px solid #ff6347;
  padding: 15px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.order-item:hover {
  background: #fff2ef;
}

.order-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 5px;
}

.order-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.order-status {
  font-size: 0.9rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 10px;
  text-transform: capitalize;
}

.order-status.Selesai {
  background: #e6f7ee;
  color: #2eaa7f;
}

.order-status.Dibatalkan {
  background: #ffeaea;
  color: #d33c3c;
}

.no-orders {
  text-align: center;
  color: #999;
  font-style: italic;
}
</style>
