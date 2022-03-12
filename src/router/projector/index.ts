import { Router } from "express";
import Projector from "../../classes/Projector.js";

const router = Router();

router.get('/on', (req, res) => {
    new Projector('1', 32).on();
    res.send('Включили');
})

export default router;