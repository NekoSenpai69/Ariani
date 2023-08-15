const axios = require('axios')
const fs=require("fs")
const pheaven = require('p-heaven');

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

    let res = await pheaven.searchdlsingle(text)
    let videoBuffer = await axios.get(res,{responseType:'arraybuffer'});
    
   
    await client.sendMessage(
                      m.from,
                                    {
                                                    document: videoBuffer,
                                                                    mimetype: 'video/mp4',
                                                                                    fileName: `${text}.mp4`
                                                                                                  },
                                                                                                                {
                                                                                                                                quoted: m
                                                                                                                                              }
                                                                                                                                                          );
    
}
}
