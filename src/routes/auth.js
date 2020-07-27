import express from 'express';
import { signupValidator } from '../validator/index';

const router = express.Router();
const { signup } = require('../controllers/auth');

router.post('/auth/signup', signupValidator, signup);

export default router;
