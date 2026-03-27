const Url = require("../models/Url");
const crypto = require("crypto");

const isValidUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) return false;
  try {
    // This will throw for invalid URLs
    // eslint-disable-next-line no-new
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

exports.createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!isValidUrl(url)) {
      return res.status(400).json({ error: "A valid 'url' field is required." });
    }

    const shortId = crypto.randomBytes(4).toString("base64url").slice(0, 6);

    const created = await Url.create({
      originalUrl: url.trim(),
      shortId
    });

    return res.status(201).json(created);
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Failed to create short URL." });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });

    if (!url) {
      return res.status(404).send("URL not found");
    }

    url.clicks += 1;
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error("Error redirecting URL:", error);
    return res.status(500).send("Internal server error");
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    return res.json({
      originalUrl: url.originalUrl,
      shortId: url.shortId,
      clicks: url.clicks,
      createdAt: url.createdAt,
      updatedAt: url.updatedAt
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return res.status(500).json({ error: "Failed to fetch analytics." });
  }
};