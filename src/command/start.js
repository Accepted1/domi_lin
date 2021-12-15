const { execSync } = require("child_process");
const path = require("path");
module.exports = function () {
  console.log("服务启动中。。。。。");
  execSync("npm run start", {
    cwd: path.resolve(process.cwd(), "app"),
  });
};
