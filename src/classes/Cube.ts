import { IEquipment, TEquipment } from '../types/index';
import TCPConnector from './TCPConnector';

export default class Cube extends TCPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;

  on() {
    console.log('on cube');
  }

  off() {
    console.log('off cube');
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
  }
}
