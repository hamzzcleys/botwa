let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, money, healt, role, duidharam } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
_*DOMPET*_
    
_*Money:*_ ${money}
_*Exp:*_ ${exp}
_*Limit*_ ${limit}
_*Umur:*_ ${age}
_*Health:*_ ${healt}
_*Role:*_ ${role}
`.trim()
    let mentionedJid = [who]
    conn.send2Button(m.chat, str, `support me plz`, `PROFILE` ,`.profile` , 'SUPPORT', '.supportme', m)
    m.reply(str)
  }
}
handler.help = ['dompet']
handler.tags = ['xp']
handler.command = /^(dompet)$/i
module.exports = handler

