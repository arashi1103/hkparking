# 🚗 HKparking — Save your time on the road

`HKparking` is a lightweight, mobile-first Progressive Web App (PWA) designed to help drivers in Hong Kong find parking vacancies instantly. By providing streamlined access to real-time parking availability and location data, it eliminates the frustration of cruising for a spot and optimizes your journey before you even hit the road.

---

## ✨ Key Features

- **⚡ Real-Time Vacancy Tracking:** Instant updates on available parking spaces across major car parks in Hong Kong.
- **📱 Progressive Web App (PWA):** Installable directly onto your iOS or Android home screen with a app-like native feel, thanks to service worker caching and a modern web manifest.
- **📴 Offline Capability:** Cached resources ensure the shell of the app loads instantly, even when transitioning through low-connectivity zones like tunnels or underground structures.
- **🔋 Performance Optimized:** Built using clean, lightweight architecture to minimize data consumption and maximize loading speeds on the move.

---

## 🛠️ Tech Stack

- **Frontend:** Semantic HTML5, CSS3 (Responsive & Touch-optimised Layouts)
- **Application Core:** Native Javascript / Service Workers (`sw.js`)
- **PWA Capabilities:** Web App Manifest (`manifest.json`) for cross-platform app installation and lifecycle management.

---

## 📂 Project Structure

```text
hkparking/
├── index.html        # Main application interface and application logic
├── manifest.json     # PWA configuration (display mode, colors, app shortcuts)
├── sw.js             # Service Worker handling caching strategies & offline delivery
├── icon-192.png      # App icon for mobile home screens / splash screens (192x192)
└── icon-512.png      # High-resolution app icon / Play Store standard (512x512)
```

---

## 🚀 Getting Started

### Prerequisites
To run this project locally, all you need is a local development server. 

### Local Development Setup

1. **Clone or Extract the Repository:**
   ```bash
   git clone https://github.com/yourusername/hkparking.git
   cd hkparking
   ```

2. **Launch a Local Server:**
   Because Service Workers require a secure context or a localized server environment (`localhost`), launch the app using a local HTTP server:

   *Using Python 3:*
   ```bash
   python -m http.server 8080
   ```
   
   *Using Node.js (via npx):*
   ```bash
   npx serve .
   ```

3. **Access the App:**
   Open your browser and navigate to `http://localhost:8080`.

---

## 📲 Installation (PWA)

- **On iOS (Safari):** Tap the **Share** button, scroll down, and select **Add to Home Screen**.
- **On Android (Chrome):** Tap the **three-dot menu** icon or look for the automated banner at the bottom, then select **Install App**.

---

## 🗺️ Data Source & Open Data Roadmap
The app is built around the integration of real-time public sector data. Future extensions aim to pull dynamically from the **Hong Kong DATA.GOV.HK** OpenAPI facility to expand real-time vacancy tracking coverage across all public and participating private car parks in the territory.

---

## 📝 License
This project is open-source. Feel free to fork, modify, and distribute as needed to improve smart mobility in Hong Kong.
