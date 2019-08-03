import Router from 'express';

const empList = require('../controller/employeeList')

const initRoutes = () => {
    const router = Router();
    console.log("Inside Intit routes");
    router.post('/empList',empList.employeeList);
    return router;
}

module.exports = {
    initRoutes,
}