let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let lang = 'id'
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "id" }, ''))
  let json = await res.json()
  //if (json.success) m.reply(json.success)
  let y = `${json.success}`
    let but
  try { but = await tts(y, lang) }
  catch (e) {
    m.reply(e + '')
    but = await tts(y)
  } finally {
    conn.sendFile(m.chat, but, 'tts.opus', null, m, true)
  }
}
 // else throw json
//}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler


function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
