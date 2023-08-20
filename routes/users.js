const { login, registr, current } = require("../controllers/users");
const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

/* GET users listing. */
router.post("/login", login);
router.post("/register", registr);
router.get("/current", auth, current);

module.exports = router;
