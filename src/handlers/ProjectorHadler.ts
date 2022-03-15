import Projector from '../classes/Projector';
import { get } from '../db';
import { CommandRequest } from '../types';
import EquipmentHandler from './EquipmentHandler';

// Обработчик проекторов
// Если проектор уже был включен, то вернет существующий объект, иначе создат новый
// TODO настроить обработчик разных команд
// !Поставить плагин Better Comments на VSCode

export default (req: CommandRequest) => {
  let eq = EquipmentHandler.getInstance().getEquipment(req.id);

  if (!eq) {
    const eqData = get(req.id)!;
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
