const express = require('express');
const router = express.Router();

const api = require('../controllers/api_controllers');

router.post('/products/create' , api.create);

router.get('/products' , api.products);

router.delete('/products/:id', api.delete);

router.post('/products/:id/update_quantity/', api.update);

module.exports = router;

