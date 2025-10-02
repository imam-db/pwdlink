# 🔐 LaliLupa Manager

> A simple, beautiful, and secure web application to manage client credentials and project information.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes  
- 🔒 **Secure** - Password masking, multi-user authentication
- 📁 **Organized** - Client → Project → Web/App structure
- 🔍 **Search** - Quick filter for clients and projects
- 📋 **Copy** - One-click copy with visual feedback
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- 👁️ **Visibility Control** - Show/hide clients (draft mode)

## 🚀 Quick Start

### Open Directly
Simply open `index.html` in your browser!

### Or Use Local Server
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

### Login
- **Viewer**: `viewer` / `viewer123`
- **Admin**: `admin` / `admin123`

## 📖 Documentation

- [Visibility Feature Guide](GUIDE-VISIBILITY.md)
- [Data Template](data-template.js) - Ready-to-use template for 10 clients

## 💾 Data Structure

```javascript
// Client
{
  "id": 1,
  "name": "Client Name",
  "description": "Description",
  "visible": true  // Show/hide
}

// Project
{
  "id": 1,
  "clientId": 1,
  "name": "Project Name",
  "web": {
    "url": "https://...",
    "credentials": [{"username": "...", "password": "..."}]
  },
  "app": {
    "url": "https://...",
    "credentials": [...]
  }
}
```

## 🎨 Customization

### Add Users
Edit `index.html` line 183:
```javascript
const USERS = [
  { username: 'newuser', password: 'pass', role: 'viewer' }
];
```

### Update Data
Edit `data.js` with your information.

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Select main branch
3. Access: `https://username.github.io/repo-name`

### Netlify / Vercel
Drag & drop folder → Get instant URL!

## 📂 Project Structure

```
lalilupa-manager/
├── index.html           # Login page
├── view.html           # Main dashboard
├── data.js             # Your data
├── data-template.js    # Template (10 clients)
└── GUIDE-VISIBILITY.md # Documentation
```

## 🎯 Use Cases

✅ Small teams credential management  
✅ Client project portals  
✅ Internal testing environments  
✅ Quick deployment needs  

## 📝 License

MIT License - Free to use!

---

**Made with ❤️ for people who forget! 😄**