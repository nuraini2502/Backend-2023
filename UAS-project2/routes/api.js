// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express - nuraini");
});

// Membuat routing employee
router.get("/employees", EmployeeController.index);
router.post("/employees", EmployeeController.store);
router.put("/employees/:id", EmployeeController.update);
router.delete("/employees/:id", EmployeeController.destroy);
router.get("/employees/:id", EmployeeController.show);
router.get("/employees/search/:name", EmployeeController.search);
router.get("/employees/status/:status", EmployeeController.status);


// export router
module.exports = router;