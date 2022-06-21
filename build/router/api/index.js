import express from 'express';
import EquipmentHandler from '../../handlers/EquipmentHandler';
const router = express.Router();
router.use('/getEq', EquipmentHandler.getEquipments);
router.use('/command', EquipmentHandler.runCommand);
export default router;
