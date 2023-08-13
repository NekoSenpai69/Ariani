const fs=require("fs")
const axios = require("axios");
require ('../../../settings')
module.exports={
    name:"lyrics",
    alias:["ly"],
    usage:`${prefa}lyrics song name`,
    desc:"Gives you lyrics of song",
    category: "Media",
    react:"💦",
    start:async(client,m,{command,prefix,text,args})=>{
if(!text) {
    return m.reply(`Please provide an lyrics Search Term !\n\nExample: ${prefix}lyrics savage time big sean`);
}
    let result = await axios.get("https://fantox001-scrappy-api.vercel.app/lyrics?search=" + text);
        let lyrics = result.data.lyrics;
        let thumbnail = result.data.thumbnail;
        let resText2 = `  『   Lyrics Search   』\n\n\n_Search Term:_ ${text}\n\n\n*📍 Lyrics:* \n\n${lyrics}\n\n\n_Powered by:_ Scrappy API - by FantoX\n\n_Url:_ https://github.com/FantoX001/Scrappy-API \n`;

    client.sendMessage(m.from, {image: {url:thumbnail},caption: resText2}, { quoted: m })
    }
                                 }
