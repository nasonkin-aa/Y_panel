import { Router } from 'express';
import projector from './projector/index.js';

const router = Router();

router.use('/api/projector', projector);

export default router;