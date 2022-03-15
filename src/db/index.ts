// Имитация базы данных

import { TEquipment } from '../types';

const Eq = [
  {
    id: 1,
    name: 'Проектор ',
    type: 1,
    ip: '192.168.0.11',
    port: 7992,
  },
  {
    id: 2,
    name: 'Проектор средний',
    type: 1,
    ip: '192.168.1.23',
    port: 8888,
  },
  {
    id: 3,
    name: 'шар',
    type: 2,
    ip: '192.168.1.37',
    port: 8888,
  },
];

const EqTypes = [
  {
    id: 1,
    name: 'Проектор',
  },
  {
    id: 2,
    name: 'Куб',
  },
];

const get = (id: number) => {
  const eq = Eq.find((e) => e.id === id);

  if (!eq) return null;

  return eq as TEquipment;
};

// eslint-disable-next-line import/prefer-default-export
export { get };
