// Тип "оборудование"
export interface TEquipment {
  id: number,
  ip: string,
  port: number,
  name: string,
	type: EqTypes,
}
export interface IEquipment extends TEquipment {
  on(): void,
  off(): void,
}

export enum EqTypes {
  Projector,
  Cube
}

// Тип для команд 
export type EquipmentCommand = 'on' | 'off';

// Формат запроса с клиента
export type CommandRequest = {
	id: number,
	command: EquipmentCommand,
};
