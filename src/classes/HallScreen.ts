import { IEquipment, TEquipment } from '../types/index';
import HTTPConnector from './HTTPConnector';

export default class HallScreen extends HTTPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  on() {
    console.log('on cube');
    //return this.instance.write('SET(0;Power;1)'); 
  }

  off() {
    console.log('off cube');
    //return this.instance.write('SET(0;Power;0)'); 
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
  }
}