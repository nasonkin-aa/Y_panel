// синглтон оборудования (всегда будет дрежать массив уже включеных штук в turnedOnEq)
// TODO: сделать метод удаления оборудования из списка при выключении
export default class EquipmentHandler {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this.turnedOnEq = [];
    }
    static getInstance() {
        if (!EquipmentHandler.instance) {
            EquipmentHandler.instance = new EquipmentHandler();
        }
        return EquipmentHandler.instance;
    }
    // получить по id обурудование
    getEquipment(id) {
        return this.turnedOnEq.find((e) => e.id === id) || null;
    }
    // Добавить новое оборудование в список включенных
    setEquipment(eq) {
        this.turnedOnEq.push(eq);
        console.log(this.turnedOnEq);
    }
}
