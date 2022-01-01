let PhoneNumber = require('awesome-phonenumber')
const fs = require ('fs')
let handler = async (m, { conn }) => {

let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Dompet'
  let botol = global.botwm
  let fetch = require('node-fetch')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { atm, name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let wm = global.botwm
    let str = `
_*BANK/TABUNGAN*_

 *Name* : ${username}

 *Bank* : ${atm}
 *Money* : ${money}

`.trim()
    let mentionedJid = [who]
    conn.sendButton(m.chat, str, `By Hamzz`, 'SUPPORT', '.supportme', fkon )
    conn.reply(str)
  }
}
handler.help = ['bank']
handler.tags = ['xp']
handler.register = true
handler.command = /^bank$/i
module.exports = handler


