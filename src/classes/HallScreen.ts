import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class HallScreen extends HTTPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  numberExpo: string;

  on() {
    console.log('on hall');
    this.onRGB();
    return this.instance.post('/cmd.cgi?cmd=REL,1,1')
  }

  onRGB(){
    this.instance.post('/cmd.cgi?cmd=REL,2,1')
  }

  off() {
    console.log('off hall');
    this.offRGB();
    return this.instance.post('/cmd.cgi?cmd=REL,1,0')
  }
  offRGB(){
    this.instance.post('/cmd.cgi?cmd=REL,2,0')
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
    this.numberExpo = eq.numberExpo;
  }
}