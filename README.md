# 🔗 URL-Shortener-API

[![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Framework-Express%205.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Library: NanoID](https://img.shields.io/badge/ID_Generator-NanoID-61DAFB)](https://github.com/ai/nanoid)

A high-efficiency microservice designed to transform long, cumbersome URLs into short, shareable links. This API focuses on speed, collision-resistant ID generation, and seamless redirection logic.

---

## 👨‍💻 Developer Information
**Yehovayire Moise** *Full-Stack Engineer | Kigali, Rwanda*

> "Software architecture is about making the complex feel simple. Short links, big impact."

---

## 🚀 Key Features

* **⚡ Lightning Fast Redirection:** Optimized Express routes for immediate URL forwarding.
* **🆔 Unique ID Generation:** Utilizing `nanoid` for secure, non-sequential, and URL-friendly short codes.
* **📊 Data Persistence:** Robust MongoDB integration via Mongoose 9.x for reliable link storage.
* **🛡️ Input Validation:** Ensures only valid URLs are processed and shortened.
* **🔄 Environment Ready:** Seamless configuration management using `dotenv`.

---

## 🛠️ Tech Stack

* **Backend:** Node.js & Express.js (v5.x)
* **Database:** MongoDB
* **ID Generation:** NanoID (v5.x)
* **Process Management:** Nodemon (Development)

---

## ⚙️ Installation & Setup

### 1. Repository Setup
```bash
git clone [https://github.com/your-username/url-shortener-api.git](https://github.com/your-username/url-shortener-api.git)
cd url-shortener-api
npm install
