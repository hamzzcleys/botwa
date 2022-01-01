let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', ' _*Done!*_ ', m)
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
handler.limit = true
//ftwrr
module.exports = handler
