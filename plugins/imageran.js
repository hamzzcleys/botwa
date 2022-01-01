let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.xteam.xyz/randomimage/${command}?APIKEY=Dawnfrostkey`)).buffer(), ' _*Done!*_ ', 'kalau gambarnya hilang click next lagi!', '➡️ NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['exo', 'bts', 'cewe', 'cowo', 'blackpink']
handler.tags = ['image']
handler.command = /^(exo|bts|cewe|cowo|blackpink)$/i

module.exports = handler