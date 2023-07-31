
require ('../../../settings')
module.exports={
    name:"mods",
    alias:["mod"],
    usage:`${prefa}mods`,
    desc:"shows mods list",
    category:"General",
    react:"✅",

    start:async(client,m,{yaOwn})=>{
        const mod= yaOwn
        let mods=`
        *🟩Archer Moderator🟩 *\n`
        for(let i=0;i<mod.length;i++){

            const um= await client.username(mod[i])
            //const um= await client.username(mod[i]+'@s.whatsapp.net')
            mods+=`\n✨${i+1}\n*👤 Name:* ${um}\n*📱 Contact:* http://wa.me/+${mod[i].split("@")[0]}\n`
        }
        await  client.sendMessage(m.from,{image:{url:'https://telegra.ph/file/aa6b424ff30a9c361989f.jpg'},caption:mods},{quoted:m})  

    }
}
