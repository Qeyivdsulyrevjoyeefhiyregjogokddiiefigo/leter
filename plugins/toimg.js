let fs = require('fs')
const uwu = fs.readFileSync('./Images3.jpg')
const gambar =[
'./Images1.jpeg',
'./Images2.jpeg',
'./Images3.jpg',
]
hasil = gambar[Math.floor(Math.random() * (gambar.length))]
owo = fs.readFileSync(hasil)
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = owo
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.jpeg', '*kemlar*', m, false, {
    thumbnail: fs.readFileSync('./src/thumb.jpeg')
  })
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
module.exports = handler
