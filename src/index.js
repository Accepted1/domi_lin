const { Command, flags } = require("@oclif/command");
const init = require("./command/init");
const start = require("./command/start");
const addIndepences = require("./command/addIndepences");
class DomiCommand extends Command {
  static flags = {
    init: flags.boolean({ char: "i" }),
    add: flags.boolean({ char: "a" }),
    start: flags.boolean({ char: "s" }),
  };
  async run() {
    const { flags } = this.parse(DomiCommand);
    if (flags.init) {
      //做一些操作
      init();
    }
    if (flags.start) {
      start();
    }
    if (flags.add) {
      addIndepences();
    }
  }
}

module.exports = DomiCommand;
