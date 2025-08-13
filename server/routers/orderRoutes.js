const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');



router.post('/createorder',  orderController.createOrder);


router.put('/confirm/:id',  orderController.confirmOrder);
router.get('/all', orderController.getAllOrders);

module.exports = router;
