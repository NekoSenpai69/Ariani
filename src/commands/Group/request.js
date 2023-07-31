module.exports = {
    name: "request",
    alias: ["req"],
    desc: "Report the bug to owners.",
    usage:`${prefa}request`,
    category: "Group",
    react:"⚠️",

    start: async(client, m, { isGroup , pushName, args , metadata }) => {
        if(!m.isGroup){
            if (!args[0]) return m.reply(`Please provide your link e.g *.request "paste your link"* !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;
          
              }
            let reportMessage = `*「 Request Recieved 」*\n\n*「 👤 Request By 」:* @${userTag}\n\n*⬜ Message:* ${userMess}\n\n*🟩 Character using:*Archer*`;
            m.reply(`Sending your request to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);
            
            let devs = [`263788671478@s.whatsapp.net`]

            for (let i = 0; i < devs.length; i++) {
              await client.sendMessage(devs[i],{image: {url: userPfp}, caption: reportMessage,mentions: [m.sender],});
            }
        }
    }
}
