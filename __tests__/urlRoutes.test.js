const request = require("supertest");
const express = require("express");

jest.mock("../models/Url", () => ({
  create: jest.fn(),
  findOne: jest.fn()
}));

const Url = require("../models/Url");
const urlRoutes = require("../routes/urlRoutes");

const app = express();
app.use(express.json());
app.use("/api/url", urlRoutes);

beforeEach(() => {
  jest.clearAllMocks();
});

describe("URL routes", () => {
  test("POST /api/url/shorten returns 400 for invalid URL", async () => {
    const res = await request(app).post("/api/url/shorten").send({ url: "bad-url" });

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "A valid 'url' field is required." });
  });

  test("POST /api/url/shorten creates short URL for valid input", async () => {
    Url.create.mockResolvedValue({
      originalUrl: "https://example.com",
      shortId: "abc123",
      clicks: 0
    });

    const res = await request(app)
      .post("/api/url/shorten")
      .send({ url: "https://example.com" });

    expect(res.status).toBe(201);
    expect(Url.create).toHaveBeenCalledTimes(1);
    expect(res.body).toHaveProperty("originalUrl", "https://example.com");
    expect(res.body).toHaveProperty("shortId");
  });

  test("GET /api/url/analytics/:shortId returns 404 when URL not found", async () => {
    Url.findOne.mockResolvedValue(null);

    const res = await request(app).get("/api/url/analytics/doesnotexist");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "URL not found" });
  });

  test("GET /api/url/analytics/:shortId returns analytics payload", async () => {
    const now = new Date().toISOString();
    Url.findOne.mockResolvedValue({
      originalUrl: "https://example.com/analytics",
      shortId: "abc123",
      clicks: 7,
      createdAt: now,
      updatedAt: now
    });

    const res = await request(app).get("/api/url/analytics/abc123");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      originalUrl: "https://example.com/analytics",
      shortId: "abc123",
      clicks: 7,
      createdAt: now,
      updatedAt: now
    });
  });
});

