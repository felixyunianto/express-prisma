const mainRouter = require('express').Router();

const authControllers = require('../controllers/auth/authControllers');
const authRouter = require('./authRouter');
const categoryRouter = require('./categoryRoutes');

mainRouter.use('/auth', authRouter);
mainRouter.use('/category', categoryRouter);

module.exports = mainRouter;