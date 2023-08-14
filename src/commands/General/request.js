const moment = require('moment-timezone')
require ('../../../settings')
module.exports = {
    name: "request",
    alias: ["req"],
    desc: "Request sent to bot owner.",
    usage:`${prefa}request`,
    category: "Group",
    react:"⚠️",

    start: async(client, m, { isGroup , pushName, args , metadata }) => {
        if(!m.isGroup){
            if (!args[0]) return m.reply(`⬛ Please provide your group link e.g *.request "paste your link"* !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;

            try {
                userPfp = await client.profilePictureUrl(m.sender, "image");
              } catch (e) {
                userPfp = botImage3;
              }

            let reportMessage = `              「 Request Recieved 」\n\n*⬜ Reported By:* @${userTag}\n\n*🟩 Message:* ${userMess}\n\n*🟫 Date:* ${moment().tz('Asia/Kolkata').format('DD/MM/YYYY')}\n*🟦 Time:* ${moment().tz('Asia/Kolkata').format('hh:mm:ss A')}\n*🟨 Character using:* Archer.*`;
            m.reply(`Sending your request to main developer...\n\n 🟥 If it is a spam you might get blocked and banned.`);
            
            let devs = [`263788671478@s.whatsapp.net`]

            for (let i = 0; i < devs.length; i++) {
              await client.sendMessage(devs[i],{image: {url: userPfp}, caption: reportMessage,mentions: [m.sender],});
            }
        }
        else{
            if (!args[0]) return m.reply(`⬛ Please provide your group link e.g *.request "paste your link"* !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;
            let gcName = metadata.subject
            let reportMessage = `              「 Request Recieved 」\n\n*⬜ Reported By:* @${userTag}\n*🟩 Group Name:* ${gcName}\n\n*🟫 Message:* ${userMess}\n\n*🟥 Date:* ${moment().tz('Asia/Kolkata').format('DD/MM/YYYY')}\n*🟦 Time:* ${moment().tz('Asia/Kolkata').format('hh:mm:ss A')}\n*🟨 Character using:* Archer.*`;
              m.reply(`Sending your rquest to main developer...\n\n 🟥 If it is a spam you might get blocked and banned.`);

              let devs = [`263788671478@swhatsapp.net`]

              for (let i = 0; i < devs.length; i++) {
                await client.sendMessage(devs[i],{ text: reportMessage,mentions: [m.sender],});
            }
        }
    }
}
