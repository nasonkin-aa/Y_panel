import bodyParser from 'body-parser';
import express from 'express';
import projector from './projector/index';
const router = express.Router();
const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// если получет запрос на api/projector, то кидает в обработчик проектора
// в теории можно сделать лакончинее
router.use('/api/projector', jsonParser, projector);
export default router;
