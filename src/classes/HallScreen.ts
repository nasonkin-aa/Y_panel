import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class HallScreen extends HTTPConnector implements IEquipment {
  on() {
    console.log('on hall');
    // this.onRGB();
    return super.powerOn('/cmd.cgi?cmd=REL,1,1');
  }

  onRGB(){
    this.instance.get('/cmd.cgi?cmd=REL,2,1')
  }

  off() {
    console.log('off hall');
    // this.offRGB();
    return super.powerOff('/cmd.cgi?cmd=REL,1,0');
  }
  offRGB(){
    this.instance.get('/cmd.cgi?cmd=REL,2,0')
  }
}