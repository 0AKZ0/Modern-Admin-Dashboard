# Modern Admin Dashboard

A responsive admin dashboard concept built with React, Vite and Tailwind CSS. The interface demonstrates a common workspace overview with KPI cards, revenue visualization, activity feed, project tracking, search filtering and mobile navigation.

> **Demo data notice:** all displayed metrics, customers, payments, projects and activity entries are fictional sample data for interface demonstration. The project is not connected to a real analytics backend or payment provider.

## Preview

The application is designed to demonstrate:
- Responsive dashboard layout with desktop sidebar and mobile navigation
- KPI summary cards with trend indicators and sparklines
- Revenue chart with a selectable display period
- Search filtering for the project list
- Activity feed and workspace overview components
- Print-friendly report action

## Technology

- React 19
- Vite 6
- Tailwind CSS 4
- Lucide React

## Requirements

- Node.js (current LTS recommended)
- npm

## Getting started

```bash
git clone https://github.com/0AKZ0/Modern-Admin-Dashboard.git
cd Modern-Admin-Dashboard
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build |

## Project structure

```text
.
├── src/
│   ├── App.jsx
│   └── ...
├── index.html
├── vite.config.js
└── package.json
```

## Customization

Replace the sample arrays in `src/App.jsx` with data from your own API. Keep credentials and private keys on the server; never expose secrets in frontend code or public environment variables.

## Scope

This repository focuses on frontend composition and interaction patterns. Authentication, persistent storage, live analytics, payment processing and a production API are outside its current scope.

## License

MIT. See [LICENSE](LICENSE).
