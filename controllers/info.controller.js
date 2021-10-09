const usersService = require('../services/users.service');
const employeesService = require('../services/employees.service');

const exportsUsers = async (req, res) => {
    const users = await usersService.getAllUsers();
    return res.json(users);
}


const exportsEmployees = async (req, res) => {
    const employees = await employeesService.getAllEmployees();
    return res.json(employees);
}

const addEmployee = async (req, res) => {
    console.log({body: req.body})
    const {data: employeeData} = req.body
    console.log(employeeData)
    const employee = await employeesService.createEmployee(employeeData);
    console.log(employee)
    return res.json(employee)
}


module.exports = {
    exportsUsers,
    exportsEmployees,
    addEmployee
}