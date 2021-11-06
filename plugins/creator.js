function handler(m) {
   let listOwner = new Array()
  for (let i of owner.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net')) {
  	listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Work\nURL;Web gwejh: http://github.com/Reteam\nEMAIL;y: ${this.user.name}@gmail.com\nORG: BUKAN BOT + NO SAVE\nTEL;Jgn lupa salam;waid= ${i.split('@')[0]}:${i.split('@')[0]}\nEND:VCARD` })
  }
  let send = this.sendMessage(m.chat, { displayName: listOwner.length + ' kontak', contacts: listOwner }, 'contactsArrayMessage', { quoted: m })
return m.reply('Chat owner *Chat to the point*\n\n *Basa basi g di jawab*')
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler


//PA PE PA PE SV sv sv NGTD LU
