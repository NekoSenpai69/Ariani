const yts = require('yt-search')
const YT = require('../../lib/YT');

module.exports = {
    name: "ytsearch",
    alias: ["yts"],
    usage: `${prefa}ytaudio <YouTube URL or search query>`,
    desc: "Downloads and sends audio from a YouTube video.",
    react: "🎵",
    category: "Music",
    start: async (client, m, { text, prefix, args }) => {
      try {
        if (!text) return m.reply('Sorry, you did not provide any search term!');
  
        const { videos } = await yts(text.trim());
  
        if (!videos || videos.length === 0) return m.reply(`No videos found for *"${text}"*`);
  
        let textResponse = '';
        const length = videos.length >= 10 ? 10 : videos.length;
  
        for (let i = 0; i < length; i++) {
          textResponse += `*#${i + 1}*\n📗 *Title: ${videos[i].title}*\n📕 *Channel: ${
            videos[i].author.name
          }*\n📙 *Duration: ${videos[i].seconds}s*\n🔗 *URL: ${videos[i].url}*\n\n`;
        }
  
        m.reply(textResponse);
      } catch (error) {
        console.error(error);
        m.reply('An error occurred while searching for videos. Please try again later.');
      }
    }
  };
