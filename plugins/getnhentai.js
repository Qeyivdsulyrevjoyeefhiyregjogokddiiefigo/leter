let fs = require('fs')
let axios = require('axios')
let request = require('request')
let topdf = require('image-to-pdf')
let nhentai = require('nhentai-node-api')

let handler = async (m, { conn, args }) => {
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys) return !0
	if (m.quoted && m.quoted.fromMe && m.quoted.isBaileys && /getnhentai 1/i.test(m.quoted.text)) {
		if (!args[0]) return m.reply('Masukkan angka')
		if (isNaN(args[0])) return m.reply('Pake angka')
		await m.reply('Loading...')
		let data = JSON.stringify(await eval(`${args[0]}-1`))
		let input = m.quoted.text.split('='.repeat(25))[data].split('ID: ')[1].split('\n')[0]
		let count = 0
		let ResultPdf = []
		let doujin = await nhentai.getDoujin(input)
		let array_page = doujin.pages
		let title = doujin.title.pretty

		for (let index = 0; index < array_page.length; index++) {
			let image_name = './nhentai/' + title + index + '.jpg'
			await new Promise((resolve) => request(array_page[index]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
			console.log(array_page[index])
			ResultPdf.push(image_name)
			count++
		}

		await new Promise((resolve) =>
			topdf(ResultPdf, 'A4')
			.pipe(fs.createWriteStream('./nhentai/' + title + '.pdf'))
			.on('finish', resolve)
		)

		let size = await fs.statSync(`./nhentai/${title}.pdf`).size
		if (size < 45000000) {
			m.reply('Uploading...')
			await conn.sendFile(m.chat, fs.readFileSync(`./nhentai/${title}.pdf`), `${title}.pdf`, '', m, false, { asDocument: true, thumbnail: fs.readFileSync(`./nhentai/${title}0.jpg`) })
				.then((result) => {
					fs.unlink(`./nhentai/${title}.pdf`, (err) => {
						if (err) throw err
					})
				})
		} else {
			m.reply('Uploading to anonfiles because file size to large')
			let options = {
				method: 'POST',
				url: 'https://api.anonfiles.com/upload',
				formData: {
					file: fs.createReadStream(`./nhentai/${title}.pdf`),
				},
			}

			for (let index = 0; index < array_page.length; index++) {
				fs.unlink('./nhentai/' + title + index + '.jpg', (err) => {
					if (err) throw err
				})
			}
			
			request(options, function(err, res, body) {
				if (err) console.log(err)
				fs.unlink(`./nhentai/${title}.pdf`, (err) => {
					if (err) throw err
				})
				m.reply('Link download to file: ' + JSON.parse(body).data.file.url.full)
			})
		}
	}
}

handler.command = /^get?(nhentai|hentai|doujin)$/i
module.exports = handler