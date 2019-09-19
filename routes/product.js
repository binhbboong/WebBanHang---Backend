const express = require('express');
const router = express.Router();

const ProductController = require('./../controllers/product.controller');

router.post('/insert-production', ProductController.insert);
router.get('/get-list-production', ProductController.getListProduction)

module.exports = router;