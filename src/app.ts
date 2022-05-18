import express from 'express';
import router from './router/index';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
