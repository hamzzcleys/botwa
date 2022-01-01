// By Caliph & Akbar
let fetch = require('node-fetch')
let fs = require('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}

let handler  = async (m, { conn }) => {
  pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`

_*RULES!!*_
➤ Bot tidak pernah meminta privasi anda.
➤ Call/VC Bot Auto Block.
➤ Chat Bot? Sewajarnya
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
➤ Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
➤ Apapun yang anda perintah pada bot ini, *KAMI TIDAK AKAN BERTANGGUNG JAWAB!*

`, quoted: m, sendEphemeral: true, thumbnail: fs.readFileSync('./src/uwu.png'), contextInfo: { mentionedJid: [global.conn.user.jid]}})

}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(.rules|rules)$/i

handler.fail = null

module.exports = handler

