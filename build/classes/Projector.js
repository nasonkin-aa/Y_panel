import TCPConnector from './TCPConnector';
export default class Projector extends TCPConnector {
    constructor(eq) {
        super(eq.ip, eq.port);
        this.name = eq.name;
        this.id = eq.id;
        this.type = eq.type;
    }
    on() {
        return this.instance.write('SET(0;Power;1)');
    }
    off() {
        return this.instance.write('SET(0;Power;0)');
    }
}
