const categoryRouter = require('express').Router();
const categoryController = require('../controllers/categoryControllers');
const checkToken = require('../helpers/checkToken');

categoryRouter.get('/',checkToken.checkLogin, categoryController.getCategories);
categoryRouter.post('/', categoryController.postCategory);
categoryRouter.put('/:id', categoryController.updateCategory);
categoryRouter.delete('/:id', categoryController.deleteCategory);

module.exports = categoryRouter;