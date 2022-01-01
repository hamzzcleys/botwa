let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  let res = `https://api.zeks.xyz/api/logobp?text=${response}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'logobp.jpg', ` _*Done!*_ `, m, false)
}
handler.help = ['logobp'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(logobp)$/i
handler.register = true
handler.limit = true

module.exports = handler

