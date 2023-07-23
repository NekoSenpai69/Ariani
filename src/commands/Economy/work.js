const economyJs = require('../../models/economic')

module.exports = {
  name: 'work',
  alias:["Work"],
  usage:`${prefa}work`,
  category:"Economy",
  cool:10,
   react: "💼",
   start: async(client, m, { text, prefix, isBotAdmin,isAdmin,mentionByTag}) => {
      const works = [
        { name: ' Bus Conductor', min: 100, max: 200 },
        { name: 'Prostitude', min: 80, max: 150 },
        { name: 'Bus Driver', min: 70, max: 120 },
        { name: 'Drug Dealer', min: 90, max: 180 },
        { name: 'Racist', min: 60, max: 100 }
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
            payout = { min: 100, max: 200 };
            break;
          case 'Prostitude':
            payout = { min: 80, max: 150 };
            break;
          case 'Bus Driver':
            payout = { min: 70, max: 120 };
            break;
          case 'Drug Dealer':
            payout = { min: 90, max: 180 };
            break;
          case 'Racist':
            payout = { min: 60, max: 100 };
            break;
          default:
            payout = { min: 0, max: 0 };
        }
      
        return { ...work, ...payout };
    }
}
}
