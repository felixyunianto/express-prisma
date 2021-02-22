const authRouter = require('express').Router();
const authController = require('../controllers/auth/authControllers');

authRouter.post('/sign-up', authController.signUp);
authRouter.post('/sign-in', authController.signIn);

module.exports = authRouter;