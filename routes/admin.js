var express = require('express');
var router = express.Router();
const database = require('../database/models/index');

const TrainerController = require('../controllers/trainerController');
const AccountController = require('../controllers/accountController');
const AdminController = require('../controllers/adminController');
const TrainingStaffController = require('../controllers/trainingStaffController');

const Account =database.db.Account;
const Role =database.db.Role;
/* Trainer routes */
router.get('/', AdminController.index );

router.get('/createTrainer', TrainerController.renderCreateView);

router.post('/addTrainer', TrainerController.create);

router.get('/viewTrainer/:userId', TrainerController.view)

router.get('/deleteTrainer/:id/:userId', TrainerController.destroy)

/* Tranining staff section*/
router.get('/createStaff', TrainingStaffController.renderCreateView);

router.post('/addStaff', TrainingStaffController.create);

router.get('/viewStaff/:userId', TrainingStaffController.view)

router.get('/deleteStaff/:id/:userId', TrainingStaffController.destroy);


/* Account section */
router.get('/changePass/:id', AccountController.renderChangePass)

router.post('/updatePass', AccountController.changePass)

module.exports = router;
