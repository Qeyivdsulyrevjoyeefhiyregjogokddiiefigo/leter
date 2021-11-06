let fs = require('fs')
let fetch = require('node-fetch')
global.tum = fs.readFileSync('./src/Ah5.jpeg')
global.tum2 = fs.readFileSync('./src/emror.jpeg')
global.thumb = 'https://i.ibb.co/34PV5yH/By-Relldev.jpg'
global.thumb2 = fs.readFileSync('./src/emror.jpeg')
global.owner = ['18589527504', '6288217843177', '62881026844196','62882178431882','0','6288217843188'] // Put your number here
global.mods = ['6285693120588'] // Want some help?
global.prems = ['18589527504','62882178431882'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4'
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'LitRHap'
global.multiplier = 69 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
