import express from 'express';
import { materialRouter } from './routers/mdcRouters.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", materialRouter);
  
app.listen(port, () => {
  console.log(`API rodando em http://localhost:3000`);
})