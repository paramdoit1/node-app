import emp from '../handler/employee';

const employeeList = async(req, res) => {
   const empList=  await emp.employeeList();
    console.log("Inside controller");
    await res.send(empList);
}

module.exports = {
    employeeList,
}