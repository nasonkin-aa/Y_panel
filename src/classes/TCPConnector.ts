import net from 'net';

export default class TCPConnector {
    instance = new net.Socket();
    ip = '';
    port = 0;

    constructor(ip: string, port: number) {
        this.ip = ip;
        this.port = port;

        this.connect();
    }

    connect() {
        console.log('conected', this.ip, this.port);
        // this.instance.connect(this.port, this.ip, () => {
        //     console.log("Client: Connected to server");
        // });

    }
}