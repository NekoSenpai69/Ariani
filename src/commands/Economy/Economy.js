
module.exports = {
  name: 'economy',
  alias:["economics"],
  usage:`${prefa}economy on/off`,
  desc:"To enable economy",
  category:"Economy",
  cool:3,
  react:"💸",
    start:async(client,m,{prefix , pushName,tagId})=>{
const economy = [
  {
    economy:false
  }
]
if(text == 'on') {
  if(economy[0].economy == 'true') {
    m.reply(`Economy is Already enabled !!`)
  } else {
    economy.push({economy:true})
    economy.shift()
    m.reply(`Economy is Now Enabled !!`)
  }
} else if (text == 'off') {
  if(economy[0].economy == 'false') {
    m.reply(`Economy is Already Disabled !!`)
  } else {
    economy.push({economy:false})
    economy.shift()
    m.reply(`Economy is Now Disabled !!`)
} 
 } else {
  m.reply(`Not A valid Statement !!`)
}
      }
  }
