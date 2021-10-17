const mongoose = require("mongoose");

const Employee = mongoose.model(
  "employees",
  new mongoose.Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: String, required: true },
  })
);

module.exports = Employee;
