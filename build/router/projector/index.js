import { Router } from 'express';
import projectorHadler from '../../handlers/ProjectorHadler';
const router = Router();
// обраюотчик проекторов
router.post('/', (req, res) => {
    projectorHadler(req.body);
});
export default router;
