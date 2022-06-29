import TCPConnector from './TCPConnector';
export default class BarcoProjector extends TCPConnector {
    on() {
        return super.powerOn("{\"jsonrpc\": \"2.0\",\"method\": \"system.poweron\",\"params\": {\"property\": \"system.state\"},\"id\": 3}");
    }
    off() {
        return super.powerOff('{"jsonrpc": "2.0", "method": "system.poweroff"}');
    }
}
