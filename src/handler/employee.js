const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..','data', '/');

console.log('DATAPATH', DATA_PATH);
const employeeList = async () => {
    const empList = {};
    const empData = await fs.readFileSync(`${DATA_PATH}employee.json`);
    const employList = await JSON.parse(empData);
    console.log(employList);
    return employList.empList;
};

module.exports = {
    employeeList,
}