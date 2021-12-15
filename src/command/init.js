const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
//拉取代码
module.exports = function () {
  try {
    execSync("git clone https://github.com/Accepted1/koa-app.git");
  } catch (err) {
    console.log("拉取代码失败");
    process.exit(1);
  }
  //修改文件夹名称
  try {
    fs.renameSync(
      path.resolve(process.cwd(), "koa-app"),
      path.resolve(process.cwd(), "app")
    );
  } catch (err) {
    console.log("重命名失败");
    process.exit(1);
  }
};
