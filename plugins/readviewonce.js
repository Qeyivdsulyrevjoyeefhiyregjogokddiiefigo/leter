let handler = async (m, { conn, text }) => {
    if (!m.quoted) throw 'Penggunaan reply viewOnce message'
    if (m.quoted.m.mtype !== 'viewOnceMessage') throw 'Reply chat viewOnce'
    conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), true, { readViewOnce: true }).catch(console.log)
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler
