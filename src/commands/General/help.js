module.exports = {
    name: "help",
    alias: ["h","menu"],
    desc: "List all command",
    category: "General",
    react:"✅",
    start: async(client, m, { commands, args, prefix, text, toUpper }) => {
        
       
   const { pushName , sender } = m 
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*🍁Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`) 
            if(cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`)       
            if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`)
            if (cmd.usage) data.push(`*💡Example :* ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            var buttonss = [
				{buttonId: `${prefix}help`, buttonText: {displayText: `help`}, type: 1},]
            let buth={
                text:`*ℹ️Command Info*\n\n${data.join("\n")}`,
                footer:"made by yush",
                buttons:buttonss,
                headerType:1
            }    
            return client.sendMessage(m.from,buth,{quoted:m})
        } else {
           const { pushName, sender } = m
let cm=commands.keys()
            let category=[];
             

            for (let cmd of cm) {
                let info = commands.get(cmd);
                if (!cmd) continue;
                if (!info.category || info.category === 'private') continue;
				if (
					!info?.category ||
					(info.category === "Nsfw" &&
					!(nsfw.includes(m.from)))
				)
					continue;
				if (Object.keys(category).includes(info.category))
                category[info.category].push(info);
				else {
                    category[info.category] = [];
                    category[info.category].push(info);
				}
			}
        if (!nsfw.includes(m.from)) {
        var emo=[ "❐" ,"❐","❐","❐","❐","❐","❐","❐","❐" , "❐",]
        } else {
        var emo=[ "❐" ,"❐","❐","❐","❐","❐","❐","❐","❐","❐" , "❐",]
        } 
        let txt = `*Hello (｡♡‿♡｡)* ${pushName} l'm *${process.env.NAME}*.
	
💡 *Tips:→ Warning:* Dont use the bot in dm or you will be banned.
💡 *Tips:→ Warning:* Dont call the bot or you will be banned.
                       
🟥 *Prefix :* [ ${prefix} ]
                       
⬜ Here's the *Commands* listed below :\n\n`
        const keys = Object.keys(category);
        for (const key of keys) {
            txt += `*${key.toUpperCase()} ${emo[keys.indexOf(key)]} :-*  \n\`\`\`${category[key]
                .map((cmd) => cmd.name).join(", ")}\`\`\`\n\n`
        }
        txt += `*🟪 Notes:*
*➪ Use ${client.prefix}help <command name> from help the list to see its description and usage*
*➪ Eg: ${client.prefix}help profile*`
			
    const eternity = [
	    "https://telegra.ph/file/e8850f2107ad99770da7e.jpg",
	    ];
            const eternitylogo =
             eternity[Math.floor(Math.random() * eternity.length)];
          client.sendMessage(m.from, {image:{url:eternitylogo}, caption:txt}, { quoted: m });
    }
  },
};


