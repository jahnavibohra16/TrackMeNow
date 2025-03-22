# 🌍 TrackMeNow  

**TrackMeNow** is a real-time geolocation tracking application built with **Node.js**, **Express.js**, **Socket.io**, and **Leaflet.js**. It allows users to share their live location and view it dynamically on an interactive map.

---

## 📌 Features  

✅ **Real-time location tracking** using Geolocation API and WebSockets  
✅ **Interactive map** powered by Leaflet.js and OpenStreetMap  
✅ **Minimal and responsive UI** with a modern gradient design  
✅ **Live updates** of user locations via WebSockets  

---

## 🛠 Technologies Used  

### **Frontend:**  
- **HTML5, CSS3** – Structuring and styling the UI  
- **JavaScript (ES6)** – Dynamic interaction and real-time updates  
- **Leaflet.js** – Displaying and manipulating maps  
- **Socket.io (Client-side)** – Receiving real-time location updates  

### **Backend:**  
- **Node.js & Express.js** – Server-side logic and routing  
- **Socket.io (Server-side)** – Handling WebSocket communication  
- **EJS (Embedded JavaScript)** – Templating engine for rendering pages  

---

## 📂 Project Structure  
TrackMeNow/ │── public/ # Static files (CSS, JS) │ ├── css/ # Stylesheets │ │ ├── style.css # Main CSS file │ ├── js/ # Client-side JavaScript │ │ ├── script.js # Handles map updates & WebSockets │── views/ # EJS templates │ ├── index.ejs # Main page template │── app.js # Express server & WebSocket logic │── package.json # Dependencies & project metadata │── README.md # Documentation


---

## 🎯 Use Case  

TrackMeNow can be used in various real-world applications, including:  
- **Personal Safety:** Share real-time location with family or friends.  
- **Fleet Management:** Track the movement of vehicles in logistics.  
- **Event Coordination:** Monitor attendees’ live locations in large gatherings.  
- **Delivery Services:** Keep track of delivery agents in real time.  

---

### 🚀✨ Live Demo
https://trackmenow-ak0r.onrender.com

## 🚀 How to Run the Project  

### **1️⃣ Install dependencies**  
```bash
npm install

