import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Book Gallery API' });
});

export default router;
