import express from 'express';
import router from './router/index';
import cors from 'cors';
import { openDB } from './db';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.use(router);
app.use(cors());
openDB()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})
    .catch((err) => console.error(err));
