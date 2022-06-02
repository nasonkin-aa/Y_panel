import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class InteractiveFloor extends HTTPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  on() {
    console.log('on floor');
    return this.instance.post('/cgi-bin/webctrl.cgi.elf?&t:26,c:5,p:7,v:1')
  }

  off() {
    console.log('off floor');
    return this.instance.post('/cgi-bin/webctrl.cgi.elf?&t:26,c:5,p:7,v:0')
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
  }
}