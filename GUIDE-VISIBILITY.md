# 📝 Guide: Visibility Feature & Template

## 🎯 Fitur Visibility

Anda sekarang bisa **hide/show client** tanpa menghapus datanya!

### **Cara Kerja:**

```javascript
{
  "id": 1,
  "name": "Client Name",
  "description": "Deskripsi",
  "visible": true   // ✅ DITAMPILKAN ke user
}

{
  "id": 2,
  "name": "Client Draft",
  "description": "Belum siap",
  "visible": false  // ❌ DISEMBUNYIKAN dari user
}
```

### **Use Case:**

1. **Draft Mode** 📝
   - Anda baru mulai isi data client baru
   - Set `visible: false`
   - User tidak akan lihat client ini
   - Anda bisa isi data santai tanpa tekanan

2. **Ready to Show** ✅
   - Data sudah lengkap
   - Ganti jadi `visible: true`
   - Client langsung muncul di website

3. **Temporary Hide** 🙈
   - Client sedang maintenance/update
   - Set `visible: false` sementara
   - Nanti bisa di-show lagi

---

## 📋 Menggunakan Template (10 Client)

### **File: `data-template.js`**

Template sudah siap dengan:
- ✅ 10 client slots
- ✅ 2 contoh yang sudah diisi
- ✅ 8 template kosong (semua `visible: false`)
- ✅ Komentar lengkap untuk guide

### **Cara Pakai:**

#### **1. Copy Template**
```bash
# Backup data lama
copy data.js data-backup.js

# Gunakan template baru
copy data-template.js data.js
```

#### **2. Edit Client**
Buka `data.js`, cari client yang mau diisi:

```javascript
// CLIENT 3 - TEMPLATE KOSONG
{
  "id": 3,
  "name": "Client Name 3",  // ← GANTI nama client
  "description": "",         // ← OPSIONAL: Tambah deskripsi
  "visible": false           // ← Masih false (belum ditampilkan)
}
```

Isi datanya:

```javascript
{
  "id": 3,
  "name": "PT. ABC Indonesia",
  "description": "Client baru dari Jakarta",
  "visible": false  // Masih draft
}
```

#### **3. Tambah Project untuk Client Tersebut**

Di bagian `"projects"`, uncomment template dan isi:

```javascript
// Hapus komentar (//) dan isi:
,{
  "id": 3,
  "clientId": 3,  // Harus sama dengan id client
  "name": "Dashboard Management",
  
  "web": {
    "url": "https://dashboard.abc.com",
    "credentials": [
      {
        "username": "admin",
        "password": "admin123"
      }
    ]
  }
}
```

#### **4. Set Visible = True Jika Sudah Siap**

```javascript
{
  "id": 3,
  "name": "PT. ABC Indonesia",
  "description": "Client baru dari Jakarta",
  "visible": true  // ✅ SEKARANG DITAMPILKAN!
}
```

#### **5. Save & Refresh Browser**

---

## 🔥 Quick Tips

### **Tip 1: Incremental Update**
```
Day 1: Isi 3 client, set visible: false
Day 2: Review, fix typo
Day 3: Set visible: true untuk yang sudah siap
Day 4: Isi client berikutnya
```

### **Tip 2: Staging vs Production**
```javascript
// Staging (internal testing)
"visible": false

// Production (live untuk user)
"visible": true
```

### **Tip 3: Batch Hide**
Kalau ada client yang sementara maintenance:
```javascript
// Set false dulu
"visible": false

// Nanti kalau sudah fix, set true lagi
"visible": true
```

---

## 📊 Status Monitoring

Untuk tracking berapa client yang visible:

```javascript
// Di browser console (F12):
const visible = appData.clients.filter(c => c.visible !== false);
console.log(`Visible clients: ${visible.length}`);
console.log(`Total clients: ${appData.clients.length}`);
```

---

## ⚠️ Important Notes

1. **Default Behavior:**
   - Jika field `visible` tidak ada = dianggap `visible: true`
   - Client lama yang belum ada field ini = tetap muncul

2. **Search Function:**
   - Search HANYA mencari di client yang `visible: true`
   - Hidden client tidak akan muncul di hasil search

3. **Project Visibility:**
   - Visibility di level **client**, bukan project
   - Kalau client hidden, semua project-nya otomatis hidden

---

## 🎨 Example: Full Client Entry

```javascript
{
  "id": 5,
  "name": "PT. Example Corp",
  "description": "Digital Marketing Agency",
  "visible": true  // ✅ Live
}

// Project untuk client id 5:
{
  "id": 10,
  "clientId": 5,
  "name": "CRM Dashboard",
  "web": {
    "url": "https://crm.example.com",
    "credentials": [
      { "username": "admin", "password": "pass1" },
      { "username": "viewer", "password": "pass2" }
    ]
  },
  "app": {
    "url": "https://download.example.com/crm.apk",
    "credentials": [
      { "username": "mobile", "password": "pass3" }
    ]
  }
}
```

---

## 🚀 Workflow Recommendation

**Untuk Multiple Client Updates:**

1. **Week 1:** Isi 5 client baru dengan `visible: false`
2. **Week 2:** Review & test internally
3. **Week 3:** Set `visible: true` untuk yang sudah OK
4. **Week 4:** Repeat untuk 5 client berikutnya

**Result:** 
- User always see polished data
- You work stress-free with draft mode
- Easy to rollback (just set visible: false)

---

**Happy Managing! 🎉**