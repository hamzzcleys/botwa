let PhoneNumber = require('awesome-phonenumber')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let fs = require('fs')
let ara = fs.readFileSync('./audio/gaboleh.m4a') 
    let pp = './src/avatar_contact.png'
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
    if (typeof db.data.users[who] == 'undefined') {
        db.data.users[who] = {
            exp: 0,
            limit: 10,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            autolevelup: false,
            banned: false,
            level: 0,
            premium: false,
            premiumTime: 0,
            role: '',
            sw: false,
        }
    }
    try {
        pp = await conn.getProfilePicture(who)
    } catch (e) {

    } finally {
let { exp, limit, level, role, age, money, registered, healt } = global.db.data.users[m.sender]
let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
        let str = `
*Hii ${name}* 👋, 

❏ *Name*: ${name}
❏ *Umur*: ${registered ? '' + age : ''}
❏ *Registered*: ${registered ? 'Yes': 'No'}
❏ *Exp*: ${exp}
❏ *Limit*: ${limit}
❏ *Level*: ${level}
❏ *Role*: ${role}

• 📢 _*SUPPORT*_
╭─
││• *Sc/Github*
││github.com/Nurutomo
││• *Github Owner*
││github.com/hamzzBot
╰─
 
 • 📮 *NOTE*
 Spam vc/call +block!
 Gunakan bot sebaik mungkin!
`.trim()
conn.send2ButtonLoc(m.chat, pp, str, '©HamzzBot By Hamzz','COMMAND',`.nyong`, 'SUPPORT', '.supportme', m)
setTimeout(() => {
					//conn.sendFile(m.chat, ara, 'gaboleh.m4a','',m,1, { mimetype: 'audio/mp4'})
					}, 1000)
    }
}

handler.command = /^(njajal)$/i
handler.register = true

module.exports = handler