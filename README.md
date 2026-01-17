# SmartMail Assistant 🤖✉️

SmartMail Assistant is a **powerful AI-driven Chrome extension** that helps users **draft and reply to emails instantly inside Gmail**. Designed with a modern **full-stack architecture**, it improves productivity, reduces response time, and ensures professional communication with minimal effort.

---

## 🚀 Why SmartMail Assistant?

Writing emails can be repetitive and time-consuming. SmartMail Assistant leverages **Google Gemini AI** to generate **context-aware, tone-customized email replies** directly within your inbox—no tab switching, no copy-paste hassle.

This project demonstrates **real-world AI integration**, **scalable backend design**, and **production-ready Chrome extension development**.

---

## ✨ Key Features

* ⚡ **Instant Reply Generation**
  Generate intelligent, context-aware email replies in seconds using Google Gemini AI.

* 🎭 **Tone Customization**
  Choose from **Professional**, **Casual**, or **Friendly** tones to match the conversation style.

* 🔌 **Seamless Gmail Integration**
  Works directly inside Gmail using a Chrome Extension—no external tools required.

* 📋 **One-Click Copy**
  Copy generated replies instantly to your clipboard.

* 🛡️ **Secure & Private**
  Email content is processed securely through a private backend with **no unnecessary data storage**.

---

## 🧠 Tech Stack Overview

### 🖥️ Frontend (Chrome Extension)

![React](https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg)
![Chrome](https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg)

* **React.js** – Component-based UI
* **Material-UI (MUI)** – Clean, modern interface
* **Chrome Extensions (Manifest V3)**

---

### ⚙️ Backend (API Server)

![Java](https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg)
![Spring](https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg)

* **Java 17**
* **Spring Boot**
* **Spring WebClient** (Reactive HTTP calls)
* **Spring Boot Actuator** (Monitoring & health checks)
* **RESTful API architecture**

---

### ☁️ AI & Cloud Services

![Google Cloud](https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg)

* **Google Gemini API**
* Prompt engineering for optimized AI responses

---

## 🧩 Architecture Overview

```
Gmail UI
   ↓
Chrome Extension (React + MUI)
   ↓ REST API
Spring Boot Backend (Java)
   ↓
Google Gemini API
```

---

## 📦 Installation & Setup

### 🔑 Prerequisites

* Node.js **v18+**
* npm or yarn
* Java **17+**
* Maven
* Google Cloud Project with **Gemini API enabled**

---

## 🔧 Backend Setup (Spring Boot)

```bash
cd backend
```

Create `src/main/resources/application.yml`:

```yaml
gemini:
  api:
    key: YOUR_GEMINI_API_KEY
    url: https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

server:
  port: 8080
```

Run the backend:

```bash
mvn spring-boot:run
```

➡️ Backend will start at: **[http://localhost:8080](http://localhost:8080)**

---

## 🧩 Frontend Setup (Chrome Extension)

```bash
cd frontend
npm install
```

Update API endpoint if required (default: `http://localhost:8080`).

Build the extension:

```bash
npm run build
```

---

## 🧩 Load Extension in Chrome

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `build/` or `dist/` folder

---

## 📨 Using SmartMail Assistant

1. Pin **SmartMail Assistant** to Chrome toolbar
2. Open Gmail and select an email
3. Click the extension icon
4. Choose a tone
5. Click **Generate Reply**
6. Copy and send 🎉

---

## 📁 Project Structure

```
SmartMail-Assistant/
│
├── backend/                # Spring Boot Application
│   ├── src/main/java/
│   │   └── com/em/EmailWriter/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── model/
│   │       └── Application.java
│   └── pom.xml
│
└── frontend/               # Chrome Extension (React)
    ├── public/
    ├── src/
    │   └── components/
    ├── package.json
    └── manifest.json
```

---

## 🔌 API Reference

### Generate Email Reply

**POST** `/api/email/generate`

**Request Body:**

```json
{
  "emailContent": "Full email text",
  "tone": "Professional"
}
```

**Response:**

```text
Generated email reply text
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Rishi Soni**
🔗 LinkedIn: [https://www.linkedin.com/in/rishi-soni-28986923b/](https://www.linkedin.com/in/rishi-soni-28986923b/)
💻 GitHub: [https://github.com/rishi02soni/](https://github.com/rishi02soni/)

---

⭐ If you like this project, don’t forget to **star the repository**!
