const router = require('express').Router();
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');
const updateController = require('../controllers/updateUser');
const searchController = require('../controllers/searchUser');
const validatation = require('../config/inputValidation')
const checkOff = require('../config/tokenValidate')

router.post('/',validatation.signup,registerController.saveUserRegistration);
router.post('/login',validatation.signup,loginController.loginUser);
router.post('/update',checkOff,updateController.updateUser);
router.post('/search',checkOff,searchController.searchUser);
router.get('/pagination',checkOff,searchController.Pagination);

module.exports = router;