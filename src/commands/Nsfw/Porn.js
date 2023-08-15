const axios = require('axios')
const fs=require("fs")
require ('../../../settings')
module.exports={
    name:"porn",
    alias:["adultvideo"],
    usage:`${prefa}porn Japanese`,
    desc:"Gives you random porn video",
    category: "Nsfw",
    react:"💦",

    category:"Nsfw",
    start:async(client,m,{command,prefix,text,args})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')


    let spank = await axios.get ("http://api.nekos.fun:8080/api/boobs");
    var spankBuffer = await fetchBuffer(spank.data.image);
    var spankGif = await buffergif(spankBuffer);
    await client.sendMessage(m.from , {video: spankGif , gifPlayback:true , caption: "boobas"} , {quoted:m})
}
}
