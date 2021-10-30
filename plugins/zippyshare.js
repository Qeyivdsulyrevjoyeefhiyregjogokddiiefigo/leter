let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
 if (!args[0]) throw 'Uhm...url nya mana?'
 let res = await fetch(API('Velgrynd', '/api/zippyshare', { url: args[0] }))
 if (!res.ok) throw await res.text()
 let json = await res.json()
 let { nama, link } = json.result.hasil
 m.reply(JSON.stringify(json.result.hasil, null, 2))
 conn.sendFile(m.chat, link, nama, '', m)
}
handler.help = ['ippydl', 'ippyshare'].map(v => 'z' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^z(ippydl|ippyshare)$/i

handler.limit = true

module.exports = handler
