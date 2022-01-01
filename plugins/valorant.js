let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
    m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  let res = await fetch(`http://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=31caf10e4a64e86c1a92bcba&text1=${response[0]}&text2=${response[1]}&text3=${response[2]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', ` _*Done!*_ `, m, false)
}
handler.help = ['valorant'].map(v => v + ' <teks|teks|teks>')
handler.tags = ['nulis']

handler.command = /^(valorant)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler