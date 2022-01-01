let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> DATABASE.data.users[m.quoted.sender].<metode>= <jumlah>
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['banggift']
handler.tags = ['owner']
handler.command = /^(banggift)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
