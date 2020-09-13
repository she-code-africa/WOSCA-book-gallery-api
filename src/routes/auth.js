import express from 'express';
import { signupValidator } from '../validator/index';

const router = express.Router();
const { signup, signIn } = require('../controllers/auth');

router.post('/auth/signup', signupValidator, signup);
router.post('/auth/signin', signIn);
export default router;
