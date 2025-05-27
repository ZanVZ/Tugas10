<template>
  <div class="profile-container">
    <h1>Profil Saya</h1>
    
    <div class="profile-card">
      <div class="avatar">
        <img src="https://up.yimg.com/ib/th?id=OIP.bZ9omRLdr3xNhKm0Mu-oxAHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="Profile Picture">
        <button @click="changePhoto" class="change-photo-btn">Ubah Foto</button>
      </div>
      
      <div class="profile-form">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input type="text" v-model="profile.name" placeholder="Nama Anda">
        </div>
        
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="profile.email" placeholder="Email Anda">
        </div>
        
        <div class="form-group">
          <label>Nomor Telepon</label>
          <input type="tel" v-model="profile.phone" placeholder="Nomor telepon">
        </div>
        
        <div class="form-group">
          <label>Alamat</label>
          <textarea v-model="profile.address" rows="3" placeholder="Alamat lengkap"></textarea>
        </div>
        
        <button @click="saveProfile" class="save-btn">Simpan Perubahan</button>
      </div>
    </div>
    
    <!-- ... -->
    <!-- BAGIAN RIWAYAT PESANAN -->
    <div class="order-history" v-if="orders.length > 0">
      <h2>Riwayat Pesanan</h2>
      <div class="orders">
        <div v-for="(order, index) in orders" :key="index" class="order-item">
          <div class="order-header">
            <span class="order-id">#{{ order.id }}</span>
            <span class="order-date">{{ order.date }}</span>
            <span class="order-status" :class="order.status">{{ order.status }}</span>
          </div>
          <div class="order-details">
            <p>{{ order.items }} items - Total: Rp {{ order.total.toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </div>

      <p v-else class="no-orders">Belum ada riwayat pesanan</p>
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
          date: '27 mei 2025',
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.profile-container h1 {
  color: #ff6347;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
}

.profile-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-bottom: 30px;
}

.avatar {
  text-align: center;
  margin-right: 30px;
}

.avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.change-photo-btn {
  background: #f0f0f0;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  color: #ff6347;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.change-photo-btn:hover {
  background-color: #ff6347;
  color: white;
}

.profile-form {
  flex-grow: 1;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #444;
}

.save-btn {
  background: #ff6347;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 700;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.save-btn:hover {
  background-color: #e5533d;
}

.order-history h2 {
  color: #ff6347;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.order-item {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  background: #fff;
}

.order-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
}

.order-status {
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
}

.order-status.Selesai {
  background: #e6f7ee;
  color: #42b983;
}

.order-status.Dibatalkan {
  background: #ffebee;
  color: #ff5252;
}

.order-details p {
  margin: 0;
  color: #555;
}

.no-orders {
  text-align: center;
  color: #888;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 20px;
}
</style>
