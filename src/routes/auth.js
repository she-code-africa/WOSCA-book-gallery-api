import express from 'express';
import { signupValidator } from '../validator/index';

const router = express.Router();
const { signup } = require('../controllers/auth');

router.post('/user', signupValidator, signup);

export default router;
