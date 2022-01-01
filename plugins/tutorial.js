let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
╭─「 *Tutorial Main HamzzBot* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *.claim*
│   Staterpack yang bisa di klaim 
│   12 jam sekali
│• *.mulung*
│• *.adventure*
│• *.petualang*
│   Untuk mencari resource seperti 
│   Money, Exp, dll..,dibutuhkan  
│   minimal 80 nyawa untuk bisa 
│   melakukannya dan, kamu tidak 
│   dapat spam karena ada delay 5 
│   menit
│• *.use potion <jumlah>*
│   Untuk memakai potion/untuk 
│   mengisi nyawa/health
│• *.shop buy potion <jumlah>*
│   Untuk membeli potion dan ketik 
│   *.use potion <jumlah>*
│   untuk menggunakan potion
│• *.shop <args>*
│   Untuk membeli atau menjual sesuatu
│• *.shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│• *.profile*
│• *.pp*
│• *.profil*
│   untuk mengetahui No whatsapmu, dll
│• *.inv*
│• *.inventory*
│• *.bal*
│   Untuk mengecek nyawa, money, dll.
│• *.judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.BENERAN GK BOHONG_*
│  
╰─「 *Tutorial Main HamzzBot* 」
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['info']
handler.command = handler.command = /^(tutorial)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
