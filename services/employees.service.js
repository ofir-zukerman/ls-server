const Employee = require('../models/employee');

const findEmployeByEmail = async email => await Employee.findOne({email}).lean().exec();

const findEmployeeById = async employeeId => await Employee.findOne({_id: employeeId}).lean().exec();

const getAllEmployees = async () => {
    try{
        const employees = await Employee.find({}).lean().exec();

        console.log({employees})

        const filterEmployees = employees.map(e => {
        const { _id: id, __v, ...employee } = e;

        return {id, ...employee};
        })
        console.log({filterEmployees})

    
        return filterEmployees;
    } catch (err) {
        throw err
    }
}

const createEmployee = async (employeeData) => {
    try{
        const newEmployee = new Employee(employeeData)
        await newEmployee.save()
        return employeeData
    } catch (err) {
        throw new Error(`Employee Not created, ${err.message}`);
    }

}



module.exports = {
    createEmployee,
    findEmployeeById,
    findEmployeByEmail,
    getAllEmployees,
}