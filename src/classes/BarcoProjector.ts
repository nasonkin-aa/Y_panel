import { IEquipment, TEquipment } from '../types/index';
import TCPConnector from './TCPConnector';

export default class BarcoProjector extends TCPConnector implements IEquipment {
  name: string;

  id: number;

  type: number;
  
  numberExpo: string;

  on() {
    return this.instance.write("{\"jsonrpc\": \"2.0\",\"method\": \"system.poweron\",\"params\": {\"property\": \"system.state\"},\"id\": id}"); 
  }

  off() {
    return this.instance.write("{ \"jsonrpc\": \"2.0\", \"method\": \"system.poweroff\", \"params\": { \"property\": \"system.state\" }, \"id\": 4 }"); 
  }

  constructor(eq: TEquipment) {
    super(eq.ip, eq.port);
    this.name = eq.name;
    this.id = eq.id;
    this.type = eq.type;
    this.numberExpo = eq.numberExpo;
  }
}
