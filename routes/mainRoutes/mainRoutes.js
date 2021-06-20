const mainRouter = require('express').Router();
const user = require('../user/users');
mainRouter.use('/',user);

module.exports =mainRouter;