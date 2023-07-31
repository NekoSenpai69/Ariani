module.exports = {
	name: "request",
	alias: ["request to join"],
	desc: "Send you official owner number.",
  usage: `${prefa}request`,
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://telegra.ph/file/e435278bda4f546ba3cfa.jpg'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const Arilogogg = "https://telegra.ph/file/e435278bda4f546ba3cfa.jpg"
        
                         
const lemo = `
*━『 Request Bot To Join Your Group 』━*

*⬛ Send your link to this number*
*🟩  http://wa.me/+263788671478` 

	    
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* 🟩Sent you the details in your dm`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:Arilogogg},caption:lemo},{quoted:m})  
    }
}
