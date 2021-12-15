const { execSync } = require("child_process");
const path = require("path");
module.exports = function () {
  execSync("npm i", {
    cwd: path.resolve(process.cwd(), "app"),
  });
};
