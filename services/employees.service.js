const Employee = require("../models/employee");

const findEmployeByEmail = async (email) =>
  await Employee.findOne({ email }).lean().exec();

const findEmployeeById = async (employeeId) =>
  await Employee.findOne({ _id: employeeId }).lean().exec();

const getAllEmployees = async () => {
  try {
    const employees = await Employee.find({}).lean().exec();

    const filterEmployees = employees.map((e) => {
      const { _id: id, __v, ...employee } = e;

      return { id, ...employee };
    });

    return filterEmployees;
  } catch (err) {
    throw err;
  }
};

const createEmployee = async (employeeData) => {
  try {
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    return employeeData;
  } catch (err) {
    throw new Error(`Employee Not created, ${err.message}`);
  }
};

const deleteEmployee = async (employeeId) => {
  try {
    const deletedEmployee = await Employee.findOneAndRemove({ id: employeeId });
    return deletedEmployee;
  } catch (err) {
    throw new Error(`Employee Not created, ${err.message}`);
  }
};

module.exports = {
  createEmployee,
  findEmployeeById,
  findEmployeByEmail,
  getAllEmployees,
  deleteEmployee,
};
