import { Router } from 'express';
import { EqTypes, IEquipment, TEquipment } from '../../types';
import Projector from '../../classes/Projector';
import Cube from '../../classes/Cube';
import { getEq } from '../../db';

const router = Router();

const EqClass: { [key in EqTypes]: new (eq: TEquipment) => IEquipment} = {
    [EqTypes.Projector]: Projector,
    [EqTypes.Cube]: Cube,
}

router.get('/', (req, res) => {
    const { body: { eqId }} = req;

    const eq = getEq(eqId);

    if (!eq) return;
    
    const eqClass = new EqClass[eq.type](eq);
    eqClass.on();
});