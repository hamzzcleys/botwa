let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let arr = []
for (let id in db.data.users) {
db.data.users[id].limit = 0

}
		conn.reply(m.chat, `*berhasil direset`, m)
}
handler.help = ['limit'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetlimit)$/i

handler.owner = true

module.exports = handler