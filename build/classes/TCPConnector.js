import net from 'net';
export default class TCPConnector {
    constructor(ip, port) {
        this.instance = new net.Socket();
        this.ip = '';
        this.port = 0;
        this.ip = ip;
        this.port = port;
        this.connect();
    }
    connect() {
        this.instance.connect(this.port, this.ip, () => {
            console.log("Client: Connected to server");
        });
    }
}
