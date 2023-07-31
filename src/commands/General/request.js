module.exports = {
    name: "request",
    alias: ["Request"],
    desc: "Request bot to join to owners.",
    usage:`${prefa}request`,
    category: "General",
    react:"⚠️",

    start: async(client, m, { isGroup , pushName, args , metadata }) => {
        if(!m.isGroup){
            if (!args[0]) return m.reply(`Please provide your group link e.g *.request "paste your link" !*`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;

            try {
                userPfp = await client.profilePictureUrl(m.sender, "image");
              } catch (e) {
                userPfp = botImage3;
              }

            let reportMessage = `              *「 Report Recieved 」*\n\n*「 👤 Request By 」:* @${userTag}\n\n*🟪 Message:* ${userMess}\n\n*🟫 Character using:* Archer*`;
            m.reply(`Sending your request to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);
            
            let devs = [`263788671478@s.whatsapp.net`]

            for (let i = 0; i < devs.length; i++) {
              await client.sendMessage(devs[i],{image: {url: userPfp}, caption: reportMessage,mentions: [m.sender],});
            }
        }
        else{
            if (!args[0]) return m.reply(`Please provide a message to report Developers !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;
            let gcName = metadata.subject;

            try {
                ppgc = await client.profilePictureUrl(m.from, "image");
              } catch {
                userPfp = botImage3;
              }
              let reportMessage = `              *「 Report Recieved 」*\n\n*「 👤 Request By 」:* @${userTag}\n*🟪 Group Name:* ${gcName}\n\n*🟥 Message:* ${userMess}\n\n*🟨 Character using: *Archer*`;
              m.reply(`Sending your request to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);

              let devs = [`263788671478@s.whatsapp.net`]

              for (let i = 0; i < devs.length; i++) {
                await client.sendMessage(devs[i],{image: {url: ppgc}, caption: requestMessage,mentions: [m.sender],});
            }
        }
    }
}
