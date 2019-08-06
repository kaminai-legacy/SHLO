import express from 'express';
import router from './server/router/index';
import cors from 'cors';
const funcErrorHandling = require('./server/middleWare/funcErrorHandling');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use(funcErrorHandling);

app.listen(PORT);


