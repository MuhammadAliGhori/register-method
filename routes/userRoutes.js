const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");



router.post("/user", userController.register);
router.get("/user", userController.login);
router.delete("/user/:id", userController.deleteUser);




module.exports = router;
