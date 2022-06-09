import bodyParser from 'body-parser';
import express from 'express';
import getEq from './getEq';

const router = express.Router();
const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// если получет запрос на api/projector, то кидает в обработчик проектора
// в теории можно сделать лакончинее

router.use('/api/getEq', getEq);
//router.use('/api/command', )

export default router;
