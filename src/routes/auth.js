import express from 'express';

const router = express.Router();
const { signIn } = require('../controllers/auth');

router.post('/auth/signin', signIn);

export default router;
