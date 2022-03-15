import TCPConnector from './TCPConnector';
export default class Cube extends TCPConnector {
    constructor(eq) {
        super(eq.ip, eq.port);
        this.name = eq.name;
        this.id = eq.id;
        this.type = eq.type;
    }
    on() {
        console.log('on cube');
    }
    off() {
        console.log('off cube');
    }
}
