# URL Shortener API

A simple URL shortener backend built with Express and MongoDB.

## Features

- Create short links from valid URLs
- Redirect short links to original URLs
- Track click counts
- Fetch analytics per short link

## Endpoints

- `POST /api/url/shorten`
  - Body: `{ "url": "https://example.com" }`
- `GET /api/url/:shortId`
  - Redirects to original URL
- `GET /api/url/analytics/:shortId`
  - Returns short-link analytics

## Environment

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Required values:

- `MONGO_URI`: MongoDB connection string
- `PORT`: server port (default: `5000`)

## Run

```bash
npm install
npm run dev
```

Or production mode:

```bash
npm start
```

## Test

```bash
npm test
```
