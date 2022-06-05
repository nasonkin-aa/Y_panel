import { IEquipment, TEquipment } from '../types/index';
import TCPConnector from './TCPConnector';

export default class Cube extends TCPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  numberExpo: string;

  on() {
    console.log('on cube');
    return this.instance.write('SET(0;Power;1)'); 
  }

  off() {
    console.log('off cube');
    return this.instance.write('SET(0;Power;0)'); 
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
    this.numberExpo = eq.numberExpo;
  }
}
