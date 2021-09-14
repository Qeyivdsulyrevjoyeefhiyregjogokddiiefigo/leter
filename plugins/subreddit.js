let fetch = require("node-fetch")
let fs = require('fs')
const defaultSubreddit = 'meme'
let handler = async (m, { conn, text }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || defaultSubreddit), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Media tidak ditemukan!'
  await conn.sendMessage(m.chat, { url: json.url }, 'imageMessage', { quoted: m, caption: json.title, thumbnail: fs.readFileSync('./Images3.jpg')})
}
handler.help = ['subreddit <query>']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler

//uwu
