let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085763791492]
│ • Telkomsel [082125985924]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [082125986924]
│ • https://saweria.co/LitRHap
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
