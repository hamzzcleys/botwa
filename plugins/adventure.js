let fs = require('fs')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
            let uang = `${Math.floor(Math.random() * 400)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let shy = JSON.parse(fs.readFileSync(`./src/Adventure/dungeon.json`))
            let json = shy[Math.floor(Math.random() * shy.length)]
            let str = `
Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${json.tempat} dan mendapatkan
*exp:* ${exp} 
*uang:* ${uang}
*sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}
`.trim()
            let img = await (await fetch(json.image)).buffer()
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            conn.sendButtonLoc(m.chat, img, str, 'HamzzBot', 'HEAL', '.heal', m)
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   conn.sendButton(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate', 'HamzzBot', 'OPEN', '.open mythic 1', m)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                conn.sendButton(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate', 'HamzzBot', 'OPEN', '.open legendary 1', m)
            }
            } else conn.sendButton(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`.trim(), 'HamzzBot', 'INVESTORY', '.inv', m)
        } else conn.send2Button(m.chat, 'Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'claim*', 'HamzzBot', 'HEAL', '#heal', 'BUY POSITION', '.buy potion 1', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['adventure', 'kerja', 'petualang', 'berpetualang', 'mulung', 'work']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung|work|kerja)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

global.adventure = [{
	
"result": "https://captain.ph/wp-content/uploads/elementor/thumbs/02BW053T1-full-orhl5ufhf1xjxg7jvzfgbp958hpu76oye7paovzb5q.png"},
{"museum": "https://telegra.ph/file/1df63aa3da913447144ff.jpg"},
{"result": "https://telegra.ph/file/df74f7a30610dd38a4be1.jpg"},
{"result": "https://telegra.ph/file/e6458882f6f342698e696.jpg"},
{"result": "https://telegra.ph/file/31c5c813557421f1aa876.jpg"},
{"result": "https://telegra.ph/file/ab69b223947ab1e9f9f90.jpg"},
]

