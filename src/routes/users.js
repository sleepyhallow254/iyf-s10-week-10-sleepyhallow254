const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { validateUser } = require('../middleware/validate');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', validateUser, usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
