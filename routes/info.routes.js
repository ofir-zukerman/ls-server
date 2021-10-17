const express = require("express");
const router = express.Router();
const {
  exportsUsers,
  exportsEmployees,
  addEmployee,
  deleteEmployee,
} = require("../controllers/info.controller");

// @route GET api/info Export all users data
router.get("/all-users", exportsUsers);
router.get("/all-employees", exportsEmployees);
router.post("/add-new-employee", addEmployee);
router.post("/delete-employee", deleteEmployee);
module.exports = router;
