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
        let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
        let { name, limit, exp, registered, regTime, age, banned, premium, premiumTime, role } = global.db.data.users[who]
        let username = conn.getName(who)
        let str = `
❏ *Nama* : ${username} 
❏ *Limit*: ${limit}
❏ *Role* : ${role}
❏ *umur* : ${age}
❏ *Premium*: ${global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Ya' : 'Tidak'}
`.trim()
conn.send2ButtonLoc(m.chat, pp, str, '©HamzzBot By Hamzz','INVE',`.inv`, 'BACK', '.nyong', m)
setTimeout(() => {
					//conn.sendFile(m.chat, ara, 'gaboleh.m4a','',m,1, { mimetype: 'audio/mp4'})
					}, 1000)
    }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^(profile|propil)$/i

module.exports = handler