var fs = require("fs");
const dir = "./src/contracts/";
const typesDir = dir + "types/";
var files = fs.readdirSync(dir);
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
  const file = files_1[_i];
  if (!file.endsWith(".json")) {
    continue;
  }
  const jsonContract = fs.readFileSync(dir + file, "utf8");
  const className = file.split(".")[0];
  var tsContract = `const ${className} = ${jsonContract.trimEnd()} as const; export default ${className};`;

  fs.existsSync(typesDir) || fs.mkdirSync(typesDir);
  fs.writeFileSync(typesDir + file.replace(".json", ".ts"), tsContract);
}
