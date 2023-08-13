const economyJs = require('../../models/economic')
const economy = require('./commands/Economy/Economy.js')
module.exports = {
  name: 'bank',
  alias:["Bank"],
  usage:`${prefa}wallet`,
  desc:"View your Bank balance.",
  category:"Economy",
  cool:3,
  react:"💸",
    start:async(client,m,{yaOwn,prefix , pushName,tagId})=>{

      if(economy[0].economy == "false") {
        m.reply("This is Not Economy enabled Group");
      } else {
      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }
      let tag = m.sender.substring(3, 7)
    const userId = m.sender;
    let economy = await economyJs.findOne({ userId: userId });
    
    if (!economy) {
      economy = new economyJs({ userId: userId });
      await economy.save();
    }
    const bank = economy.bank.toLocaleString();

    let walText = 
    `\n🏦 *Bank* 🏦
    \n👤Name: ${pushName}
    \n🏷️Tag: ${tag}
    \n💳Bank: ${bank}`
    
    await client.sendMessage(m.from , {text: walText} , {quoted:m})
      }
    }
};
