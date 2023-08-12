module.exports = {
    name: 'information',
    aliases: ['info'],
    category: 'General',
    description: 'Get information bot information',
    react: "✅",
    async execute(client, arg, M) {
        //console.log(M.mentions.includes((client.user.id).split(':')[0] + '@s.whatsapp.net'))
        //console.log((client.user.id).split(':')[0] + '@s.whatsapp.net')
        const pad = (s) => (s < 10 ? '0' : '') + s
        const formatTime = (seconds) => {
            const hours = Math.floor(seconds / (60 * 60))
            const minutes = Math.floor((seconds % (60 * 60)) / 60)
            const secs = Math.floor(seconds % 60)
            return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
        }
        const uptime = formatTime(process.uptime())
        //client.contactDB
        M.reply(
            `🚦 *UPTIME:* ${uptime}\n\n🔰 *COMMANDS:* ${client.cmd.size}`
        )
    }
}
