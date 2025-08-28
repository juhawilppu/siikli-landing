# 🌾 Siikli landing page

This repository contains the **marketing website for Siikli**, a modern ERP for Finnish agriculture.

👉 Main application: [Siikli ERP](https://github.com/juhawilppu/siikli)

---

## 🚀 Tech stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- Deployed to **AWS S3 + CloudFront**

---

## 🛠️ Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build and deploy to S3/CloudFront
./deploy.sh
```

## 📂 Project structure

```
siikli-landing/
├── public/         # static assets (favicon, og images, robots.txt)
├── src/
│   ├── assets/     # logos, images
│   ├── components/ # reusable UI (Header, Footer, CTA buttons)
│   ├── pages/      # page-level components (Home, Pricing, etc.)
│   └── main.tsx
└── deploy.sh       # syncs dist/ to S3
```

## 🌱 Philosophy

- Minimal and fast: <100 ms TTFB from CloudFront edge locations.
- Separation of concerns: Landing page repo is independent of app code.
- Accessible and responsive: Works across desktop and mobile.
- Boring tech: No complicated frameworks, just React + Tailwind.
