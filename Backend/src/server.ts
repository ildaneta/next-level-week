import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// arquivo estáticos de uma pasta específica pdf, image
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);