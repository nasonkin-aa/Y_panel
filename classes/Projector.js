import commands from "../commands.js";


import getCommand from "../utils/getCommand.js";
import Socket from "./Socket.js";

export default class Projector extends Socket {
  
 
    on(command) {
      console.log(command)
      return this.instance.write(getCommand(commands.POWERON));
    }

    off() {
        console.log(getCommand(commands.POWEROFF))
        return this.instance.write(getCommand(commands.POWEROFF));
     }
}