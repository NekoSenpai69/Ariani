module.exports = {
	name: "support",
	alias: ["support-group"],
	desc: "Send you official support group link.",
  usage: `${prefa}support`,
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://telegra.ph/file/f0c24da2961de0bede5e1.mp4',
                   'https://telegra.ph/file/f7d87038dc8c486c1a094.mp4',
                   'https://telegra.ph/file/672375c8205e1f126f200.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const Arilogogg = "https://telegra.ph/file/e435278bda4f546ba3cfa.jpg"
        
                         
const lemo = `
*━『 Support Group Link 』━*

https://chat.whatsapp.com/FbzMg4DzlGQKKfW43TPEGX`
	    
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}*🟩 have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:Arilogogg},caption:lemo},{quoted:m})  
    }
}
