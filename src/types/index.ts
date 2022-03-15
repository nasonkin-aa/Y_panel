// Тип "оборудование"
export interface TEquipment {
  id: number,
  ip: string,
  port: number,
  name: string,
	type: number,
}
export interface IEquipment extends TEquipment {
  on(): void,
  off(): void,
}

// Тип для команд 
export type EquipmentCommand = 'on' | 'off';

// Формат запроса с клиента
export type CommandRequest = {
	id: number,
	command: EquipmentCommand,
};
