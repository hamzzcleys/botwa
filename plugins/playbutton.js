let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  let res = `https://api.zeks.xyz/api/gplaybutton?text=${response}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'gplaybutton.jpg', ` _*Done!*_ `, m, false)
}
handler.help = ['gplaybutton'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(gplaybutton)$/i
handler.register = true
handler.limit = true

module.exports = handler

