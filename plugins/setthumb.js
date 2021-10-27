//just trying, maap kalo eror
//Reply gambar bang, jangan send gambar pake caption , nanti eror

let handler = async m => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		let img = await q.download()
		 await conn.downloadAndSaveMediaMessage({ message: m.message.extendedTextMessage.contextInfo.null }, './src/thumb').then(() => m.reply('done'))
	} else throw 'Reply imagenya'
}

handler.help = ['thumb'].map(v => 'set' + v)
handler.command = /^set(thumb|thumbnail)$/i
handler.owner = true

module.exports = handler
