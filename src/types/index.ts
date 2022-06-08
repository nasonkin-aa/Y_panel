// Тип "оборудование"
export interface TEquipment {
  id: number,
  ip: string,
  port: number,
  name: string,
  number: string,
	type: EqTypes,
}
export interface IEquipment extends TEquipment {
  on(): void,
  off(): void,
}

export enum EqTypes {
  BarcoProjector = 1,
  Cube = 2,
  AquaStadium = 3,
  ContinentalDrift = 4,
  HallScreen = 5,
  InteractiveFloor = 6,
  WorldInDropWater = 7
}

// Тип для команд 
export type EquipmentCommand = 'on' | 'off';

// Формат запроса с клиента
export type CommandRequest = {
	id: number,
	command: EquipmentCommand,
};
