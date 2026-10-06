# 🏫 AV-ERP — Academic Institution ERP & Automated Reporting Engine

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modular Full-Stack Enterprise Resource Planning (ERP) platform and automated document pipeline designed for educational institutions. Manages the complete student lifecycle from admission intake and role-based portal access to dynamic PDF generation for student dossiers and report cards.

---

## ⚡ Core Subsystems

- **📑 Automated Admission & PDF Engine**: Automatically compiles incoming admission submissions into standardized, print-ready PDF admission forms (`backend/output/admission-forms`).
- **📊 Academic Performance & Report Card Generator**: Dynamic evaluation engine compiling term marks, attendance, and faculty remarks into structured term report cards (`backend/output/reports`).
- **⚡ Redis Caching & Session Architecture**: High-speed session handling, rate-limiting, and caching for high-frequency queries.
- **✉️ Transactional Mail Engine**: Integrated with Mailtrap for automated verification, admission confirmation notices, and fee receipts.
- **🔐 Multi-Role Access Control (RBAC)**: Distinct permissions and portal dashboards for School Administrators, Teachers, and Students/Parents.

---

## 📁 Repository Structure

```
AV-ERP_Main/
├── backend/
│   ├── index.js                     # Express server & API routes
│   ├── mailtrap/                    # Transactional email templates & transport
│   ├── output/                      # Generated document storage
│   │   ├── admission-forms/         # Auto-compiled student admission PDFs
│   │   └── reports/                 # Auto-compiled academic performance cards
│   ├── redis-local/                 # Local Redis configuration & service docs
│   └── package.json
├── frontend/                        # Client-side web portal & dashboards
├── idpass.md                        # Default access credentials & roles
├── render.yaml                      # Render cloud deployment blueprint
└── vercel.json                      # Vercel deployment configuration
```

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js `>= 18.x`
- Redis Server (local or cloud instance)

### Setup Backend

```bash
cd backend
npm install
cp .env.example .env

# Start backend server
npm start
```

### Setup Frontend

```bash
cd ../frontend
# Open index.html or run local dev server
npx serve .
```

---

## 👨‍💻 Author
Engineered by [Nikhil Yadav](https://github.com/Nikhil-Vzo).
