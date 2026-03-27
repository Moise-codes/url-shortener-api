const express = require("express");
const urlController = require("../controllers/urlController");

const router = express.Router();

router.post("/shorten", urlController.createShortUrl);
router.get("/analytics/:shortId", urlController.getAnalytics);
router.get("/:shortId", urlController.redirectUrl);

module.exports = router;