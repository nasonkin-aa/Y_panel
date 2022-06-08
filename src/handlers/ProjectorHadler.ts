import Projector from '../classes/BarcoProjector';
import { db } from '../db';
import { CommandRequest, TEquipment } from '../types';
import EquipmentHandler from './EquipmentHandler';

// Обработчик проекторов
// Если проектор уже был включен, то вернет существующий объект, иначе создат новый
// TODO настроить обработчик разных команд


export default async (req: CommandRequest) => {
  let eq = EquipmentHandler.getInstance().getEquipment(req.id);

  if (!eq) {
    const eqData = await db?.get<TEquipment>('SELECT * FROM expositions WHERE id=?', req.id);
    if (!eqData) return;

    eq = new Projector(eqData);
    EquipmentHandler.getInstance().setEquipment(eq);
  }
  if (req.command === "off"){
    eq.off();
  }
  if (req.command === "on"){
    eq.on();
  }

  return (eq);
};
