import { IEquipment, TEquipment } from '../types/index';
import TCPConnector from './TCPConnector';

export default class Projector extends TCPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  on() {
    return this.instance.write('SET(0;Power;1)'); 
  }

  off() {
    return this.instance.write('SET(0;Power;0)'); 
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
  }
}
