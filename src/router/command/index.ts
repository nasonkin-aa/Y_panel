import { Router } from 'express';
import { EqTypes, IEquipment, TEquipment } from '../../types';
import Projector from '../../classes/BarcoProjector';
import Cube from '../../classes/Cube';
import AquaStadium from '../../classes/WorldInDropWater';
import BarcoProjector from '../../classes/BarcoProjector';
import ContinentalDrift from '../../classes/ContinentalDrift';
import HallScreen from '../../classes/HallScreen';
import InteractiveFloor from '../../classes/InteractiveFloor';
import WorldInDropWater from '../../classes/WorldInDropWater';
import { db } from '../../db';

const router = Router();

const EqClass: { [key in EqTypes]: new (eq: TEquipment) => IEquipment} = {
    [EqTypes.BarcoProjector]: BarcoProjector,
    [EqTypes.Cube]: Cube,
    [EqTypes.AquaStadium]: AquaStadium,
    [EqTypes.ContinentalDrift]:ContinentalDrift,
    [EqTypes.HallScreen]: HallScreen,
    [EqTypes.InteractiveFloor]: InteractiveFloor,
    [EqTypes.WorldInDropWater]: WorldInDropWater
}

router.get('/', async (req, res) => {
    const { body: { eqId }} = req;
    console.log('hui --- ', req, res);
    const eq = await db?.get<TEquipment>('SELECT * FROM expositions WHERE id=?', eqId);;

    if (!eq) return;
    
    const eqClass = new EqClass[eq.type](eq);
    eqClass.on();
});