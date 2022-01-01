let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Anjay istrinya kartun', 'HamzzBot', '➡️ NEXT', `${usedPrefix + command}`, m,)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i
handler.limit = true

module.exports = handler
