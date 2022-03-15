import express from 'express';
import router from './router/index';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.use(router);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
