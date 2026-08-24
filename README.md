# VitalsLog

> A full-stack clinical vital signs monitoring platform that enables doctors and nurses to manage patients, record vital signs, monitor threshold-based alerts, and track patient health trends in real time.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

 **Live Demo:** https://vitals-log.vercel.app

---

##  Overview

VitalsLog is a healthcare-focused monitoring system built for clinics and hospitals. It provides role-based dashboards for doctors and nurses, allowing medical staff to:

- Manage patient records.
- Configure custom vital-sign thresholds.
- Record patient vitals quickly.
- Track historical trends through charts.
- Receive alerts when readings exceed safe limits.
- Maintain an audit trail of clinical activities.

The platform is designed around real-world clinical workflows, emphasizing speed, accessibility, reliability, and patient safety.

---

##  Features

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
## Current Status

Implemented:

- React 19 and Vite client application.
- Express 5 API server.
- Login form with shared email and password validation.
- Password verification with bcrypt.
- JWT-based authentication for successful logins.
- Login rate limiting: five attempts per 15 minutes per client.
- Prisma `User` model with `ADMIN`, `NURSE`, and `VIEWER` roles.
- Seed data for demo doctor and nurse accounts.

Planned clinical workflows such as patient records, vital-sign logging, thresholds, alerts, dashboards, and audit logs are documented in [PLAN.md](PLAN.md) but are not implemented yet.

## Repository Structure

```text
client/     React + Vite frontend
server/     Express API, Prisma schema, migrations, and seed script
shared/     Shared TypeScript types and Zod validators
```

The repository uses npm workspaces. The root package coordinates the client, server, and shared packages.

## Tech Stack

- **Frontend:** React, React Router, TanStack Query, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Validation:** Zod in the shared workspace
- **Authentication:** JSON Web Tokens and bcrypt
- **Database:** PostgreSQL with Prisma ORM
- **Tooling:** Vite, ESLint, TypeScript, `tsx`

## Quick Start

### Prerequisites

- Node.js with npm.
- A running PostgreSQL database.

### Install

From the repository root:

```bash
npm install
```

### Configure Environment Variables

Copy the example environment files:

```bash
cp client.env client/.env
cp server.env server/.env
```

Update `server/.env` with a reachable PostgreSQL connection string and a development `AUTH_SECRET`. The supplied client configuration points API requests to `http://localhost:5000` and the server allows the Vite origin at `http://localhost:5173`.

Environment variables:

| File | Variable | Purpose |
| --- | --- | --- |
| `client/.env` | `VITE_ENV` | Selects the client API URL behavior. |
| `client/.env` | `VITE_API_URL` | API base URL used outside development. |
| `server/.env` | `PORT` | Express port; defaults to `5000`. |
| `server/.env` | `DATABASE_URL` | PostgreSQL connection string used by Prisma. |
| `server/.env` | `AUTH_SECRET` | Secret used to sign authentication tokens. |
| `server/.env` | `CLIENT_URL` | Frontend origin allowed by CORS. |

Do not commit real secrets or production database credentials.

### Create the Database Schema

Run the migration and seed commands from the repository root:

```bash
npm run db:migrate -w server
npm run db:seed -w server
```

The seed creates these demo users, both with the password `demo1234`:

| Role | Email |
| --- | --- |
| Admin | `doctor@demo.com` |
| Nurse | `nurse@demo.com` |

Use demo credentials only for local development.

### Start Development

Start both applications from the repository root:

```bash
npm run dev
```

Open the client at [http://localhost:5173](http://localhost:5173). The API is available at [http://localhost:5000](http://localhost:5000).

To start one workspace separately:

```bash
npm run dev -w client
npm run dev -w server
```

## API

### `POST /api/auth/login`

Accepts a JSON body validated by the shared login schema:

```json
{
  "email": "doctor@demo.com",
  "password": "demo1234"
}
```

The endpoint is rate limited to five requests per 15-minute window. Invalid credentials return an error response; successful authentication returns the server's login response and token.

## Scripts

Run these commands from the repository root unless noted otherwise:

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the client and server concurrently. |
| `npm run build` | Intended to build the shared, server, and client workspaces in order. |
| `npm run install:all` | Installs workspace dependencies. |
| `npm run dev -w client` | Starts the Vite development server. |
| `npm run dev -w server` | Starts the Express development server with `tsx watch`. |
| `npm run db:migrate -w server` | Creates or applies a Prisma development migration. |
| `npm run db:seed -w server` | Seeds the local database. |

The current root `build` command is not yet runnable because the shared workspace does not define a `build` script. The repository also does not currently define test, lint, or typecheck scripts at the root.

## Roadmap

The planned product scope is maintained in [PLAN.md](PLAN.md). The next major areas are:

- Protected role-aware dashboards.
- Patient CRUD and nurse assignments.
- Vital-sign logging and historical trends.
- Patient-specific alert thresholds and acknowledgements.
- Shared validation for clinical data entry.
- Audit logging and production deployment improvements.

## License

See [LICENSE](LICENSE) for license details.
