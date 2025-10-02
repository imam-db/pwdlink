// Data untuk LaliLupa Manager
// Edit file ini untuk update data
// 
// visible: true  -> Client DITAMPILKAN
// visible: false -> Client DISEMBUNYIKAN (draft/belum siap)

const appData = {
  "clients": [
    {
      "id": 1,
      "name": "Perfetti",
      "description": "",
      "visible": true  // ✅ DITAMPILKAN
    },
    {
      "id": 2,
      "name": "Wipro Malaysia",
      "description": "",
      "visible": true  // ✅ DITAMPILKAN
    },
    {
      "id": 3,
      "name": "Mayora",
      "description": "",
      "visible": true  // ✅ DITAMPILKAN
    }
  ],
  "projects": [
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
    {
      "id": 2,
      "clientId": 2,
      "name": "WUM Apps",
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
    },
    {
      "id": 3,
      "clientId": 3,
      "name": "Mayora Motoris",
      "app": {
        "url": "https://tuas.my.id/box/mayoramtr.apk",
        "credentials": [
          {
            "username": "tester",
            "password": "mayorapwd"
          },
          {
            "username": "tester2",
            "password": "mayorapwd"
          }
        ]
      },
      "web": {
        "url": "https://report-mayoraapp.tuas.my.id",
        "credentials": [
          {
            "username": "viewer",
            "password": "viewer"
          }
        ]
      }
    }
  ]
};
