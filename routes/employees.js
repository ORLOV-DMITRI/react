const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { all, add, remove, getById, edit } = require("../controllers/employees");

///api/employees/
router.get("/", auth, all);

///api/employees/:id
router.get("/:id", auth, getById);

///api/employees/add
router.post("/add", auth, add);

///api/employees/remove/:id
router.post("/remove/:id", auth, remove);

router.put("/edit/:id", auth, edit);

module.exports = router;
