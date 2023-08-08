const YT = require('../../lib/YT')
const yts = require("youtube-yts");

module.exports = {
    name: "ytvideo",
    alias: ["ytv", "ytvideo"],
    usage: `${prefa}ytaudio <YouTube URL or search query>`,
    desc: "Downloads and sends audio from a YouTube video.",
    react: "🎵",
    category: "Music",
    start: async (client, m, { command, prefix, text, args }) => {
        try {
            const link = async (term) => {
              const { videos } = await yts(term.trim());
              if (!videos || !videos.length) return null;
              return videos[0].url;
            };
      
            if (!args[0]) return m.reply('Please use this command with a valid youtube.com link');
      
            const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;
            const term = validPathDomains.test(args[0]) ? args[0].trim() : await link(args.join(' '));
      
            if (!term) return m.reply('Please use this command with a valid youtube content link');
      
            if (!YT.validateURL(term.trim())) return m.reply('Please use this command with a valid youtube.com link');
      
            const { videoDetails } = await YT.getInfo(term);
      
            m.reply('*Mattekudasai, aku sama...*');
      
            let textResponse = `*Title:* ${videoDetails.title} | *Type:* Video | *From:* ${videoDetails.ownerChannelName}`;
      
            // Send an image and caption with details
            // await client.sendMessage(
            //   m.from,
            //   {
            //     text: textResponse
            //   },
            //   {
            //     quoted: m
            //   }
            // );
      
            if (Number(videoDetails.lengthSeconds) > 1800) return m.reply('Cannot download video longer than 30 minutes');
      
            // Get and send the video buffer
            const videoBuffer = await YT.getBuffer(term, 'video');
            await client.sendMessage(
              m.from,
              {
                document: videoBuffer,
                mimetype: 'video/mp4',
                fileName: `${videoDetails.title}.mp4`
              },
              {
                quoted: m
              }
            );
          } catch (error) {
            console.error(error);
            m.reply('An error occurred while processing the video. Please try again later.');
          }
        }
      };