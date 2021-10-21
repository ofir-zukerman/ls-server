const usersService = require("../services/users.service");
const employeesService = require("../services/employees.service");

const exportsUsers = async (req, res) => {
  const users = await usersService.getAllUsers();
  return res.json(users);
};

const exportsEmployees = async (req, res) => {
  const employees = await employeesService.getAllEmployees();
  return res.json(employees);
};

const addEmployee = async (req, res) => {
  const { data: employeeData } = req.body;
  const employee = await employeesService.createEmployee(employeeData);

  return res.json(employee);
};

const deleteEmployee = async (req, res) => {
  console.log(req.body);
  const { data: employeeId } = req.body;
  const deletedEmployee = await employeesService.deleteEmployee(employeeId);

  return res.json(deletedEmployee);
};

module.exports = {
  exportsUsers,
  exportsEmployees,
  addEmployee,
  deleteEmployee,
};
