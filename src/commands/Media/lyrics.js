const findLyrics = require('simple-find-lyrics');
module.exports = {
    name: "lyrics",
    alias: ["ly"],
    usage:`${prefa}lyrics <query>`,
    desc: "Finds the lyrics of the given song",
    category: "Media",
    react: "✅",
    cool:10,
    start: async(client, m,{text,pushName}) => {       
if (!text) return m.reply(`❌ No query provided!`)
try {
const lyric = await lyrics(text);
if (lyric == 'Unknow lyric.') return m.reply("")
txtt = lyric.split("_").pop()
var txt = `
*🎶 Lyrics :-* \n
${lyric}
`
 console.log(lyric)
 await client.sendMessage(m.from, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
  }
}
