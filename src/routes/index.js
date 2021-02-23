const mainRouter = require('express').Router();

const authControllers = require('../controllers/auth/authControllers');
const authRouter = require('./authRouter');
const categoryRouter = require('./categoryRoutes');
const productRouters = require('./productRouters');

mainRouter.use('/auth', authRouter);
mainRouter.use('/category', categoryRouter);
mainRouter.use('/product', productRouters);

module.exports = mainRouter;