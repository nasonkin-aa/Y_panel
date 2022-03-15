import { IEquipment } from '../types';

// синглтон оборудования (всегда будет дрежать массив уже включеных штук в turnedOnEq)
// TODO: сделать метод удаления оборудования из списка при выключении

export default class EquipmentHandler {
  private static instance: EquipmentHandler;

  private turnedOnEq: IEquipment[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): EquipmentHandler {
    if (!EquipmentHandler.instance) {
      EquipmentHandler.instance = new EquipmentHandler();
    }

    return EquipmentHandler.instance;
  }

  // получить по id обурудование
  public getEquipment(id: number) {
    return this.turnedOnEq.find((e) => e.id === id) || null;
  }

  // Добавить новое оборудование в список включенных
  public setEquipment(eq: IEquipment) {
    this.turnedOnEq.push(eq);
    console.log(this.turnedOnEq);
  }
}
