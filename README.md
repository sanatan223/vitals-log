# VitalsLog

> A full-stack clinical vital signs monitoring platform that enables doctors and nurses to manage patients, record vital signs, monitor threshold-based alerts, and track patient health trends in real time.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)


🚀 **Live Demo:** https://vitals-log.vercel.app

---

## 📖 Overview

VitalsLog is a healthcare-focused monitoring system built for clinics and hospitals. It provides role-based dashboards for doctors and nurses, allowing medical staff to:

- Manage patient records.
- Configure custom vital-sign thresholds.
- Record patient vitals quickly.
- Track historical trends through charts.
- Receive alerts when readings exceed safe limits.
- Maintain an audit trail of clinical activities.

The platform is designed around real-world clinical workflows, emphasizing speed, accessibility, reliability, and patient safety.

---

## ✨ Features

### Authentication & Authorization
- Secure authentication using Auth.js.
- Role-Based Access Control (RBAC).
- Protected server-side routes.
- Session management with secure cookies.
- Role-aware dashboards.

### Doctor Dashboard
- Create patient profiles.
- Edit patient information.
- Assign patients to nurses.
- Configure patient-specific alert thresholds.
- Manage clinic users.
- View audit logs.

### Nurse Dashboard
- View assigned patients.
- Prioritized patient list based on active alerts.
- Record new vital signs.
- Acknowledge alerts.
- View patient history.

### Vital Monitoring
- Heart Rate tracking.
- Blood Pressure tracking.
- Temperature tracking.
- Historical trend visualization.
- Time-series patient charts.

### Alert System
- Threshold-based alerts.
- Active / Acknowledged status tracking.
- Alert acknowledgment workflow.
- Patient-specific threshold configuration.

### Data Experience
- Search patients.
- Sort patient records.
- Filter by status.
- Cursor-based pagination.
- Optimistic UI updates.
- Loading, Empty, Error, and Success states.

### Accessibility
- Keyboard-first navigation.
- Accessible modal dialogs.
- Focus management.
- WCAG-compliant interactions.

---

## 🏗 Tech Stack

### Frontend

- React
- TypeScript (Strict Mode)
- Tailwind CSS
- TanStack Query

### Backend

- Express.js
- Auth.js
- Zod Validation
- RBAC Middleware

### Database

- PostgreSQL
- Prisma ORM

### DevOps

- Vercel
- GitHub Actions
- ESLint
- Prettier
- Vitest
- Playwright

---


## ⚡ Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/vitalslog.git

cd vitalslog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

### 4. Run Database Migrations

```bash
npx prisma migrate dev
```

### 5. Seed Database

```bash
npm run db:seed
```

### 6. Start Development Server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## 🔐 Environment Variables

| Variable | Description |
|-----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| AUTH_SECRET | Auth.js secret |
| AUTH_URL | Application URL |
| GOOGLE_CLIENT_ID | Google OAuth Client ID |
| GOOGLE_CLIENT_SECRET | Google OAuth Secret |
| NEXT_PUBLIC_APP_URL | Public application URL |
| NODE_ENV | Environment mode |

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the full-stack development environment concurrently. |
| `npm run dev:client` | Starts the Vite frontend development server only. |
| `npm run dev:server` | Starts the Express backend development server using `tsx`. |
| `npm run build:client` | Builds the React/Vite frontend into the `/dist` directory. |
| `npm run build:server` | Compiles the Express TypeScript backend into JavaScript for production. |
| `npm run vercel-build` | Runs the production Vite build used during Vercel deployment. |

---

### Core Flow

```text
Doctor
   │
   ├── Create Patients
   ├── Assign Nurses
   └── Configure Thresholds
            │
            ▼
        Nurse
            │
            ├── View Assigned Patients
            ├── Record Vitals
            └── Review Alerts
                    │
                    ▼
           Threshold Evaluation
                    │
                    ▼
                Alert Engine
                    │
                    ▼
            Active / Acknowledged
```


---

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

---


## 🚨 Edge Cases Covered

- Concurrent vital submissions.
- Network failures during mutations.
- Threshold changes after historical logs exist.
- Partial vital readings.
- Invalid role access attempts.
- Optimistic UI rollback.
- Session expiration.
- Empty patient assignments.

---

## 🛣 Roadmap

### Version 1.0

- [ ] Authentication
- [ ] RBAC
- [ ] Patient CRUD
- [ ] Vital Logging
- [ ] Alert System
- [ ] Dashboard Analytics

### Version 1.1

- [ ] Real-time alerts via WebSockets
- [ ] Email notifications
- [ ] Mobile responsive optimization
- [ ] Export reports (CSV/PDF)

### Version 1.2

- [ ] Multi-clinic support
- [ ] Advanced analytics
- [ ] AI-powered anomaly detection
- [ ] Predictive risk scoring

---

## 👨‍⚕️ Demo Credentials

### Doctor Account

```text
Email: doctor@demo.com
Password: demo1234
```

### Nurse Account

```text
Email: nurse@demo.com
Password: demo1234
```

---

## 🙏 Acknowledgements

Built as part of the **Digital Heroes Full Stack Developer Trial**.

Special thanks to the Digital Heroes team for creating a product-focused engineering challenge that emphasizes real-world software development, clean architecture, deployment, documentation, and engineering craftsmanship.

---

## 📄 License

MIT License © 2025

See [LICENSE](LICENSE) for details.