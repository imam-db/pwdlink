// Data untuk LaliLupa Manager
// Edit file ini untuk update data
// 
// CARA PAKAI:
// 1. visible: true  -> Client DITAMPILKAN ke user
// 2. visible: false -> Client DISEMBUNYIKAN (untuk data yang belum siap)
// 3. Isi data sesuai kebutuhan, lalu set visible: true

const appData = {
  "clients": [
    // ========================================
    // CLIENT 1 - CONTOH YANG SUDAH DIISI
    // ========================================
    {
      "id": 1,
      "name": "Perfetti",
      "description": "Van Melle Indonesia",
      "visible": true  // ✅ DITAMPILKAN
    },
    
    // ========================================
    // CLIENT 2 - CONTOH YANG SUDAH DIISI
    // ========================================
    {
      "id": 2,
      "name": "Wipro Malaysia",
      "description": "Wipro Unza Malaysia",
      "visible": true  // ✅ DITAMPILKAN
    },
    
    // ========================================
    // CLIENT 3 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 3,
      "name": "Client Name 3",  // GANTI dengan nama client
      "description": "",  // OPSIONAL: Deskripsi singkat
      "visible": false  // ❌ DISEMBUNYIKAN - Set true jika sudah siap
    },
    
    // ========================================
    // CLIENT 4 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 4,
      "name": "Client Name 4",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    },
    
    // ========================================
    // CLIENT 5 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 5,
      "name": "Client Name 5",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    },
    
    // ========================================
    // CLIENT 6 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 6,
      "name": "Client Name 6",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    },
    
    // ========================================
    // CLIENT 7 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 7,
      "name": "Client Name 7",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    },
    
    // ========================================
    // CLIENT 8 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 8,
      "name": "Client Name 8",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    },
    
    // ========================================
    // CLIENT 9 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 9,
      "name": "Client Name 9",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    },
    
    // ========================================
    // CLIENT 10 - TEMPLATE KOSONG
    // ========================================
    {
      "id": 10,
      "name": "Client Name 10",
      "description": "",
      "visible": false  // ❌ DISEMBUNYIKAN
    }
  ],
  
  "projects": [
    // ========================================
    // PROJECT 1 - Contoh untuk Client 1 (Perfetti)
    // ========================================
    {
      "id": 1,
      "clientId": 1,
      "name": "PVMI Coaching",
      "web": {
        "url": "https://report-coaching.tuas.my.id/",
        "credentials": [
          {
            "username": "report",
            "password": "viewer"
          },
          {
            "username": "admin",
            "password": "toormodX"
          }
        ]
      },
      "app": {
        "url": "https://tuas.my.id/box/coaching.apk",
        "credentials": [
          {
            "username": "tester",
            "password": "coachingpwd"
          }
        ]
      }
    },
    
    // ========================================
    // PROJECT 2 - Contoh untuk Client 2 (Wipro)
    // ========================================
    {
      "id": 2,
      "clientId": 2,
      "name": "Dashboard Admin ABC",
      "web": {
        "url": "https://wum.tuas.my.id/",
        "credentials": [
          {
            "username": "report",
            "password": "viewer"
          }
        ]
      },
      "app": {
        "url": "https://tuas.my.id/box/wum/",
        "credentials": [
          {
            "username": "tester",
            "password": "asd"
          },
          {
            "username": "testererry",
            "password": "asd"
          }
        ]
      }
    }
    
    // ========================================
    // TEMPLATE PROJECT - COPY PASTE UNTUK CLIENT BARU
    // ========================================
    // Uncomment (hapus //) dan isi data:
    //
    // ,{
    //   "id": 3,  // ID unik project
    //   "clientId": 3,  // ID client (harus sama dengan id client di atas)
    //   "name": "Project Name",  // Nama project
    //   
    //   // UNTUK PROJECT YANG PUNYA WEB:
    //   "web": {
    //     "url": "https://website-url.com",
    //     "credentials": [
    //       {
    //         "username": "username1",
    //         "password": "password1"
    //       },
    //       {
    //         "username": "username2",
    //         "password": "password2"
    //       }
    //     ]
    //   },
    //   
    //   // UNTUK PROJECT YANG PUNYA APP:
    //   "app": {
    //     "url": "https://download-link.com/app.apk",
    //     "credentials": [
    //       {
    //         "username": "appuser",
    //         "password": "apppass"
    //       }
    //     ]
    //   }
    // }
    //
    // CATATAN:
    // - Jika project hanya punya WEB, hapus bagian "app"
    // - Jika project hanya punya APP, hapus bagian "web"
    // - Credentials bisa lebih dari 1, tinggal tambah { username, password }
    
  ]
};