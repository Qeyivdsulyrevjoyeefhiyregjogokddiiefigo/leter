let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'where\'s message?', 'conversation')
    if (m.quoted.m.mtype !== 'viewOnceMessage') return conn.sendMessage(m.chat, 'Reply chat viewOnce')
    conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), true, { readViewOnce: true, quoted: m }).catch(console.log)
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler
