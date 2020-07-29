import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';
import authRouter from './routes/auth';

require('dotenv').config();

const app = express();

// Parse incoming requests data
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', indexRouter);
app.use('/', authRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Book Gallery API' });
});

export default app;
