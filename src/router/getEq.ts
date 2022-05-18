import { Router } from 'express';
import { getAll } from '../db';

const router = Router();

// обраюотчик проекторов
router.get('/', (req, res) => {
    const eqs = getAll();

    res.send({ eqs });
});

export default router;