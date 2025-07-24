const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect, isAdmin } = require('../middleware/authMiddleware');


router.post('/', protect, orderController.createOrder);


router.put('/confirm/:id', protect, isAdmin, orderController.confirmOrder);

module.exports = router;
