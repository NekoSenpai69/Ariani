const economyJs = require('../../models/economic')
const economy = require('./commands/Economy/Economy.js')
module.exports = {
  name: 'work',
  alias:["Work"],
  usage:`${prefa}work`,
  category:"Economy",
  cool:10,
   react: "💼",
   start: async(client, m, { text, prefix, isBotAdmin,isAdmin,mentionByTag}) => {
     if(economy[0].economy == "false") {
        m.reply("This is Not Economy enabled Group");
      } else {
      const works = [
        { name: ' Bus Conductor', min: 400, max: 600 },
        { name: 'Prostitude', min: 150, max: 400 },
        { name: 'Bus Driver', min: 200, max: 900 },
        { name: 'Drug Dealer', min: 500, max: 900 },
        { name: 'Racist', min: 600, max: 1000 }
    ]
    const work = getRandomWork(works)
    const earnings = Math.floor(Math.random() * (work.max - work.min + 1)) + work.min;
    await economyJs.updateOne({ userId: m.sender }, { $inc: { wallet: earnings } });
   m.reply(`👨‍💼 You worked as a ${work.name} and earned *${earnings}*`)

    function getRandomWork(works) {
        const randomIndex = Math.floor(Math.random() * works.length);
        const work = works[randomIndex];
        let payout;
      
        switch (work.name) {
          case 'Bus Conductor':
            payout = { min: 400, max: 600 };
            break;
          case 'Prostitude':
            payout = { min: 150, max: 400 };
            break;
          case 'Bus Driver':
            payout = { min: 200, max: 900 };
            break;
          case 'Drug Dealer':
            payout = { min: 500, max: 900 };
            break;
          case 'Racist':
            payout = { min: 600, max: 1000 };
            break;
          default:
            payout = { min: 0, max: 0 };
        }
      
        return { ...work, ...payout };
    }
     }
}
}
