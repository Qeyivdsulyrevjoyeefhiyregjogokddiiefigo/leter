let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(API('Velgrynd', '/api/twitter', { url: args[0] }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { desc, HD } = json.result
  conn.sendFile(m.chat, HD, 'file.mp4', desc, m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twitter$/i

handler.limit = true

module.exports = handler
