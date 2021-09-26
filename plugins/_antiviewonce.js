let handler = m => m
handler.before = async function (m) {
    if (!db.data.chats[m.chat].viewonce) return
    if (m.mtype == 'viewOnceMessage') {
    	m.reply('viewOnce detected!').then(async () => await this.copyNForward(m.chat, await this.loadMessage(m.chat, m.id), true, { readViewOnce: true, quoted: m }))
    }
}

module.exports = handler