import { Router } from 'express';
import { db } from '../db';
import { TEquipment } from '../types';

const router = Router();

// обраюотчик проекторов
router.get('/', async (req, res) => {
    const eqs = await db?.all<TEquipment[]>('SELECT * FROM expositions');

    res.send({ eqs });
});

export default router;