import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class WorldInDropWater extends HTTPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  number: string;

  on() {
    console.log('on blob');
    return this.instance.post('/setMainCtrl.cgi?Type=9&SubType=274&Value=1')
  }

  off() {
    console.log('off blob');
    return this.instance.post('/setMainCtrl.cgi?Type=9&SubType=274&Value=0')
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
    this.number = eq.number;
  }
}