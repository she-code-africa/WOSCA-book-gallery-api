import express from 'express';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import indexRouter from './routes/index';
import authRouter from './routes/auth';

require('dotenv').config();

const app = express();

// Parse incoming requests data
app.use(expressValidator());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/', authRouter);

export default app;
