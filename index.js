const express = require('express');

const routes = require('./src/routes/routes')

const app= express();

const port = 3000;

const basepath = '/application';

app.use(basepath, routes.initRoutes());

app.listen(port, ()=> console.log(`Example app listening to port ${port}`));

