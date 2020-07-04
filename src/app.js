import express from 'express';
import indexRouter from './routes/index';

require('dotenv').config();

const app = express();

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', indexRouter);


app.get('/', function(req, res) {
  res.status(200).json({ message: "Welcome to Book Gallery API"});
});

export default app;
