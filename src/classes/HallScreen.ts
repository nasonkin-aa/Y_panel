import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class HallScreen extends HTTPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  on() {
    console.log('on hall');
    return this.instance.post('/cmd.cgi?cmd=REL,2,1','/cmd.cgi?cmd=REL,1,1')
  }

  off() {
    console.log('off hall');
    return this.instance.post('/cmd.cgi?cmd=REL,2,0','/cmd.cgi?cmd=REL,1,0')
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
  }
}