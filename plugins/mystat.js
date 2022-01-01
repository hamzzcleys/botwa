let fetch = require('node-fetch')
    let handler = async (m, { conn, text }) => {
	const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
    
    let old = performance.now()
    let neww = performance.now()
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
	await m.reply(' _*Tunggu Banh...*_ ')
  let ext= `
┌─〔 HamzzBot 〕
├ Aktif selama ${uptime}
├ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
├ Ping: ${neww - old} ms
├ *${groups.length}* Grup
├ *${chats.length - groups.length}* Chat Pribadi
├ *${Object.keys(global.DATABASE.data.users).length}* Pengguna
├ *${conn.blocklist.length}* Terblock
├ *${Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
├ *${Object.entries(global.DATABASE.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
└────
┌─〔 Pengaturan 〕
├ '✅'  *Anti Call*
├ '✅' *Anti Spam*
├ '✅' *Anti Troli*
├ '❌' *Auto Backup DB*
├ '❌' *Mode Grup*
├ '❌' *Jadi Bot*
├ '❌' *Mode Nsfw*
└────
`.trim()
await conn.send2ButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/ftHQG2R/IMG-20211122-WA0073.jpg`)).buffer(), ext.trim(), 'HamzzBot By Hamzz',`SUPPORT`,`.supportme`, 'DONASI', '.donasi',m)
    

}
handler.help = ['mystat']
handler.tags = ['info']
handler.command = /^mystat$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}