
# SmartMail Assistant 🤖✉️

### Write better emails. Reply faster. Stay in your workflow.

An AI-powered email assistant with a standalone web interface and a Chrome extension designed for Gmail.

<p align="center">
  <a href="YOUR_LIVE_DEMO_URL">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Web_App-6C63FF?style=for-the-badge" alt="Live Demo"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-17%2B-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Spring_Boot-Backend-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-Web_UI-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenAI-API-412991?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"/>
</p>

---

## 🚀 Overview

SmartMail Assistant helps users create clear, context-aware email replies using AI. Choose a writing tone, provide the original email, and generate a reply in seconds.

The project offers two ways to use the assistant:

| Mode | How it works |
|---|---|
| **Web App** | Open the React interface, paste an email, select a tone, and generate a reply. |
| **Gmail Chrome Extension** | Use the extension's in-page action to access the assistant while working in Gmail. |

## 🖥️ Web UI Preview

<p align="center">
  <img src="docs/screenshots/web-ui-homepage.png" alt="SmartMail Assistant Web Interface" width="100%"/>
</p>

## 📩 Gmail Extension Preview

<p align="center">
  <img src="docs/screenshots/gmail-extension.png" alt="SmartMail Assistant Gmail Extension" width="100%"/>
</p>

---

## ✨ Key Features

- ⚡ **AI-Powered Reply Generation** – Generate context-aware email replies in seconds.
- 🎭 **Tone Customization** – Choose Professional, Casual, or Friendly tones.
- 🌐 **Standalone Web Application** – Write and generate replies through a dedicated web interface.
- 🔌 **Gmail Integration** – Access the assistant through a Chrome extension.
- 📋 **One-Click Copy** – Copy generated replies instantly.
- 🔐 **Secure API Handling** – Keep API credentials on the backend instead of exposing them in frontend code.
- 📱 **Responsive Interface** – Clean and modern user experience.

---

## 🛠️ Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Material_UI-007FFF?style=flat-square&logo=mui&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"/>
</p>

- React.js
- Vite
- Material UI (MUI)
- CSS

### Backend
<p>
  <img src="https://img.shields.io/badge/Java_17-ED8B00?style=flat-square&logo=openjdk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/>
  <img src="https://img.shields.io/badge/Maven-C71A36?style=flat-square&logo=apachemaven&logoColor=white"/>
</p>

- Java 17
- Spring Boot
- Spring WebClient
- REST APIs
- Jackson

### AI Integration
<p>
  <img src="https://img.shields.io/badge/OpenAI_API-412991?style=flat-square&logo=openai&logoColor=white"/>
</p>

- OpenAI Responses API
- GPT-4.1 mini
- Prompt Engineering

### Browser Integration
<p>
  <img src="https://img.shields.io/badge/Chrome_Extensions-4285F4?style=flat-square&logo=googlechrome&logoColor=white"/>
</p>

- Chrome Extension
- Manifest V3
- Gmail integration

---

## 🧠 Architecture

```text
                    SMARTMAIL ASSISTANT
                             |
              +--------------+--------------+
              |                             |
          WEB APP MODE                  GMAIL MODE
              |                             |
         React + Vite                 Chrome Extension
              |                             |
              +--------------+--------------+
                             |
                       REST API Request
                             |
                    Spring Boot Backend
                         (Java)
                             |
                       Email Service
                             |
                    OpenAI Responses API
                             |
                    Generated Email Reply
                             |
                   Return Reply to Client
```

### 🔄 How It Works

1. User enters the original email content.
2. User selects the preferred reply tone.
3. React sends the email content and tone to the Spring Boot backend.
4. The backend constructs an AI prompt.
5. Spring WebClient sends a request to the OpenAI API.
6. Jackson extracts the generated reply from the API response.
7. The generated reply is returned to the frontend.
8. The user can review and copy the response.

---

## 📁 Project Structure

```text
Smart-Email-Assistant/
│
├── email-writer-react/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
├── EmailWriter-backend/
│   ├── src/main/java/com/em/EmailWritter/
│   │   ├── Controller/
│   │   ├── Services/
│   │   └── EmailWritterApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── EmailWriterExtension/
│   ├── manifest.json
│   ├── content.js
│   └── content.css
│
├── docs/
│   └── screenshots/
│       ├── web-ui-homepage.png
│       └── gmail-extension.png
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Java 17+
- Maven
- Node.js 18+
- npm
- Google Chrome
- OpenAI API key

Get your API key from the [OpenAI Platform](https://platform.openai.com/api-keys).

### 1. Clone the Repository

```bash
git clone https://github.com/rishi02soni/Smart-Email-Assistant.git
cd Smart-Email-Assistant
```

Replace the repository URL if your GitHub repository uses a different name.

### 2. Configure the OpenAI API Key

Open:

`EmailWriter-backend/src/main/resources/application.properties`

Add:

```properties
spring.application.name=EmailWriter

openai.api.url=https://api.openai.com/v1/responses
openai.api.key=${OPENAI_API_KEY}
```

Set your API key as an environment variable.

**Windows PowerShell:**

```powershell
$env:OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
```

**macOS / Linux:**

```bash
export OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
```

Never commit your API key to GitHub.

### 3. Run the Backend

Open a terminal:

```bash
cd EmailWriter-backend
mvn clean spring-boot:run
```

Backend runs at:

```text
http://localhost:8080
```

Keep this terminal running.

### 4. Run the Web Application

Open another terminal:

```bash
cd email-writer-react
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

The frontend communicates with:

```text
http://localhost:8080/api/email/generate
```

### 5. Install the Chrome Extension

1. Open `chrome://extensions` in Google Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `EmailWriterExtension` folder.
5. Pin SmartMail Assistant to your Chrome toolbar.
6. Open Gmail and test the extension.

After changing extension files, click **Reload** on the extension page and refresh Gmail.

---

## 🔌 API Reference

### Generate Email Reply

**Endpoint**

```http
POST /api/email/generate
```

**Request Body**

```json
{
  "emailContent": "Hi, could you please share the project update?",
  "tone": "Professional"
}
```

**Response**

```text
Hi,

Thank you for reaching out. I would be happy to share
the latest project update.

Best regards
```

---

## 🔐 Security & Privacy

- Keep API credentials in environment variables.
- Never expose API keys in frontend code.
- Do not commit `.env` files or private credentials.
- Review AI-generated replies before sending.
- Avoid submitting confidential email content unless authorized.

---

## 🚧 Future Improvements

- Real-time streaming of generated replies.
- Additional email tones and writing styles.
- Reply length customization.
- Improved Gmail email-context detection.
- Better error handling and automated testing.
- Cloud deployment of frontend and backend.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

## 👨‍💻 Author

**Rishi Soni**

- LinkedIn: [Rishi Soni](https://www.linkedin.com/in/rishi-soni-28986923b/)
- GitHub: [rishi02soni](https://github.com/rishi02soni/)

---

<p align="center">
  ⭐ If you find this project useful, consider giving the repository a star!
  <br/><br/>
  <strong>SmartMail Assistant — Write Smarter. Reply Faster.</strong>
</p>
