import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import path from 'path';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.json('Hello');
});
export { app };
