import commands from "../commands.js";
import getCommand from "../utils/getCommand.js";
import Socket from "./Socket.js";

export default class Projector extends Socket {
    on() {
      console.log('On')
      // return this.instance.write(getCommand(commands.POWERON));
    }

    off() {
        console.log('Off')
       // return this.instance.write(getCommand(commands.POWEROFF));
     }
}