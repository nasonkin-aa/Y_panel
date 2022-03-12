import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Projector from './classes/Projector.js';
import router from './router/index.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + '/public'));
app.use(router);

app.listen(PORT, () => {
    console.log(`open on port ${PORT}`)

    const projector = new Projector('0', 2);
});