# Locket-style Gold web starter

A safe Next.js starter for a `/gold` page.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000/gold

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel choose **Add New > Project**.
3. Import the GitHub repository.
4. Framework preset: **Next.js**.
5. Deploy.

## Backend

`app/api/gold/status/route.js` is a demo endpoint only. Replace it with an API/service that you own or are authorized to use.

Store secrets in Vercel **Project Settings > Environment Variables**. Do not put secret keys or receipt tokens in client-side React code.
