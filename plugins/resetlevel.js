let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let arr = []
for (let id in db.data.users) {
db.data.users[id].level = 0

}
		conn.reply(m.chat, `*berhasil direset`, m)
}
handler.help = ['level'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetlevel)$/i

handler.rowner = true

module.exports = handler