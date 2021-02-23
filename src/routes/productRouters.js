const productRouters = require('express').Router();
const productControllers = require('../controllers/productControllers');

productRouters.get('/', productControllers.getProducts);
productRouters.post('/', productControllers.postProduct);
productRouters.put('/:id', productControllers.updateProduct);
productRouters.delete('/:id', productControllers.deleteProduct);

module.exports = productRouters;