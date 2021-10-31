let handler = async (m, { conn }) => {
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  m.reply('List Groups:\n' + txt)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

