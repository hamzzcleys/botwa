let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
   m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  let res = `https://chikka-web.herokuapp.com/api/bot/gfx2?nama=${response}&apikey=demo`
  conn.sendFile(m.chat, res, 'marvellogo.jpg', `_*Done!*_`, m, false)
}
handler.help = ['gfxloli'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(gfxloli)$/i
handler.limit = true

module.exports = handler




