const express = require('express');
const router = express.Router();

//importing controller from desired path
const homeController = require('../controllers/home_controller');

//homepage controller route
router.get('/', homeController.home);

//Adding Task Controller route
router.post('/add-task', homeController.addtask);

//Adding Task Controller route
router.post('/delete-tasks', homeController.deletetasks);

//exporting router
module.exports = router;