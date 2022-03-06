// import Projector from "./classes/Projector.js";

// const projector = new Projector('localhost', 8000);


// projector.listeners.connect(() => console.log('aa'));

// projector.on();
// // projector.off();

import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import Projector from "./classes/Projector.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const activeTech = {};

const app = express();

app.use(express.static(__dirname + '/public'));

app.post('/api/projector', express.json(), (req, res) => {
    let projector = null;
//проверка
    if (activeTech.hasOwnProperty(req.body.id)) {
        projector = activeTech[req.body.id];
    } else {
        projector = new Projector(req.body.ip, 9090);
        activeTech[req.body.id] = projector;
    }

    console.log(req.body);

    if (req.body.method == 'on'){
        projector.on();
    }

    if (req.body.method == 'off') {
        projector.off();
    }

    res.send('privet');

})

app.listen('9090', () => {
    console.log('pognali nahui');
})
