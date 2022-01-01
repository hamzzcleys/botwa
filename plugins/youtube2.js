let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Subscribe & Support* : _https://youtube.com/channel/UCEmSavUA7R_hL-hmH7gEqJg_
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Subscribe YouTube*', 'status@broadcast')
}
handler.command = /^(youtube2)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
