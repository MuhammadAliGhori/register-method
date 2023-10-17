const express = require("express");
const router = express.Router();
const sellerController = require("../controllers/sellerController");

router.post("/", sellerController.createSeller);
router.get("/", sellerController.getSellers);

module.exports = router;
