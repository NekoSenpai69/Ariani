const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "263788671478";
}

let owners = gg.split(",");
global.owner = owners.map(owner => owner + '@s.whatsapp.net');
global.mongodb = process.env.MONGO_URI || null;
global.prefa = process.env.PREFIX || ".";
global.sessionId = process.env.SESSION_ID || null;
global.malid = process.env.MAL_USERNAME || "Stess_Giver";
global.malpass = process.env.MAL_PASSWORD || "Larsnoctis7";
global.port = process.env.PORT || 8080;
global.packname = process.env.PACKNAME || "Archer";
global.nameBot = process.env.NAME || "Archer";
global.economy = process.env.ECONOMY || "false";

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});


//Everything written here is not copy righted. You can use as your need.
