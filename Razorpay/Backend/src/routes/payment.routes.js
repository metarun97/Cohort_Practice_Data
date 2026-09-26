const express = require("express");
const paymentController = require('../controllers/payment.controller');


const router = express.Router();


router.post('/create-order',paymentController.createPaymentController);

router.post('/verify',paymentController.verifyPaymentController);


module.exports = router;
