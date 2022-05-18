// Имитация базы данных

import { TEquipment } from '../types';

const Eq : TEquipment[] = [
  {
    id: 1,
    name: 'Проектор ',
    type: 0,
    ip: '192.168.0.11',
    port: 7992,
  },
  {
    id: 2,
    name: 'Проектор средний',
    type: 0,
    ip: '192.168.1.23',
    port: 8888,
  },
  {
    id: 3,
    name: 'шар',
    type: 1,
    ip: '192.168.1.37',
    port: 8888,
  },
];

const getEq = (id: number) => {
  const eq = Eq.find((e) => e.id === id);

  if (!eq) return null;

  return eq;
};

const getAll = () => {
  return Eq;
}

// eslint-disable-next-line import/prefer-default-export
export {
  getEq,
  getAll,
};
