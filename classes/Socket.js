import net from 'net';

export default class Socket {
    listeners = {
        connect: (callback) => this.connectListener(callback),
        error: (callback) => this.connectListener(callback),
        end: (callback) => this.connectListener(callback)
    }

    constructor(ip, port) {
        this.instance = new net.Socket();
        this.ip = ip;
        this.port = port;

        this.connect();
    }

    connect() {
        this.instance.connect(this.port, this.ip, () => {
            console.log("Client: Connected to server");
        });

    }
    error() {
        this.instance.on(this.port, this.ip, function(err){
            console.log(err);
        });
    }
    
    end() {
        this.instance.on(this.port, this.ip, () => {
            console.log("Disconnect");
        });
    }

    connectListener(callback) {
        this.instance.on('connect', callback);
    }
}