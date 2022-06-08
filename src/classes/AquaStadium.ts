import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class AquaStadium extends HTTPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  number: string;

  on() {
    console.log('on aqua');
    return this.instance.post('/cmd.cgi?cmd=REL,1,1')
  }

  off() {
    console.log('off hall');
    return this.instance.post('/cmd.cgi?cmd=REL,2,1')
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
    this.number =eq.number;
  }
}