let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
    m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  let res = `https://api.zeks.xyz/api/text3dbox?apikey=PutriCntq&text=${response}`
  conn.sendFile(m.chat, res, 'text3d.jpg', ` _*Done!*_ `, m, false)
}
handler.help = ['text3d'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(text3d)$/i
handler.register = true
handler.limit = true
module.exports = handler

