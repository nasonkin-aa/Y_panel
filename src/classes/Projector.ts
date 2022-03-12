import { Equipment } from "../types/index.js";
import TCPConnector from "./TCPConnector.js"

export default class Projector extends TCPConnector implements Equipment {
    on() {
        console.log('on');
    }

    off() {
        return null;
    }
}