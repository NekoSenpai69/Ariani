module.exports = {
    name: "disable",
    alias: ["deact","unregister" , "deactivate"],
    desc: "disables the commands",
    usage: `${prefa}disable {command}`,
    cool:3,
    react:"✅",
    category: "Group",
    start: async(client, m, { text, prefix, args,isBotAdmin,isAdmin,yaOwn}) => {
      if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
      if(!isBotAdmin) return m.reply("🧍🏼Broh Make me admin to use this command")
      if(!text) return m.reply("No option provided!!")

        if (args[0] == "mod") {
                if(!mods.includes(`${m.from}`)) return m.reply("🛡 *Mod* is not enabled")

await db.pull ('mods',`${m.from}`)
        m.reply('💮 Successfully Disabled *Mod*')
        }
        if (args[0] == "nsfw") {
          if(!nsfw.includes(`${m.from}`)) return m.reply("🛡 *Nsfw* is not enabled")

await db.pull('nsfw',`${m.from}`)
  m.reply('💮 Successfully Disabled *Nsfw*')
  }
  if(args[0]=="events"||args[0]=="event"){
    if(!wlc.includes(`${m.from}`)) return m.reply("🛡 *Events* is not enabled")

    await db.pull('events',`${m.from}`)
      m.reply('💮 Successfully Disabled *Events*')
  }

  if (args[0] == "economy") {
    if(!yaOwn.includes(m.sender)) return m.reply("This command is only for mods")
    if(!economy.includes(`${m.from}`)) return m.reply("🛡Use .support to get economy group link")

await db.pull('nsfw',`${m.from}`)
m.reply('💮 Successfully Disabled *Economy*')
}
    }
}
