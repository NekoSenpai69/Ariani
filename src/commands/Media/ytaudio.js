const YT = require('../../lib/YT'); // Assuming this is the library for working with YouTube
const yts = require("youtube-yts"); // Assuming this is the library for YouTube search

module.exports = {
  name: "ytaudio",
  alias: ["yta", "ytmusic"],
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
  
        if (!text) return m.reply('Please use this command with a valid youtube.com link');
  
        const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;
        const term = validPathDomains.test(text) ? text.trim() : await link(text);
  
        if (!term) return m.reply('Please use this command with a valid youtube content link');
  
        if (!YT.validateURL(term.trim())) return m.reply('Please use this command with a valid youtube.com link');
  
        const { videoDetails } = await YT.getInfo(term);
  
        m.reply('*Mattekudasai, aku sama...*');
  
        let textResponse = `*Title:* ${videoDetails.title} | *Type:* Audio | *From:* ${videoDetails.ownerChannelName}`;
  
        // Send an image and caption with details
        await client.sendMessage(
          m.from,
          {
            image: {
              url: `https://i.ytimg.com/vi/${videoDetails.videoId}/maxresdefault.jpg`
            },
            caption: textResponse
          },
          {
            quoted: m
          }
        );
  
        if (Number(videoDetails.lengthSeconds) > 1800) return m.reply('Cannot download audio longer than 30 minutes');
  
        // Get and send the audio buffer
        const audio = await YT.getBuffer(term, 'audio');
        await client.sendMessage(
          m.from,
          {
            audio: audio,
            mimetype: 'audio/mpeg',
            fileName: `${videoDetails.title}.mp3`
          },
          {
            quoted: m
          }
        );
      } catch (error) {
        console.error(error);
        m.reply('An error occurred while processing the audio. Please try again later.');
      }
    }
  };