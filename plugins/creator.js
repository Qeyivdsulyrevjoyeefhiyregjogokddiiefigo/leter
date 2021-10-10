function handler(m) {
  let listOwner = new Array()
  for (let i of owner.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net')) {
  	listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Work\nEND:VCARD` })
  }
  this.sendMessage(m.chat, { displayName: listOwner.length + ' kontak', contacts: listOwner }, 'contactsArrayMessage', { quoted: m })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
