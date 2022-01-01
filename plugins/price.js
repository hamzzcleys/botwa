let fetch = require('node-fetch')
const fs = require ('fs')
let handler = async (m, { conn }) => {

let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

    pepe = await conn.getProfilePicture('17152018064@s.whatsapp.net').catch(() => 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg')
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "HamzzBot PRICE",
        "description": `
◩ *FREE USER*
└───────
 └❎ Unlimited Limit
 └❎ Premium User 
 └❎ Add Bot to Group 
   └  ▹  *Rp. ~0,00~*
 └ Chat Bot | hub : owner
  
◩ *PREMIUM USER*
└───────
 └✅ Unlimited Limit 
 └✅ Premium User 
 └❎ Add Bot to Group 
   └  ▹  *Rp. 5.000*
     └ Expired 3 hari
 └ Order | hub : owner

`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "6535029169904116"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "6535029169904116",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "17152018064@s.whatsapp.net"
        },
        "footerText": ""
    }

    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: fkon })

}

handler.help = ['price']
handler.tags = ['main']
handler.command = /^(price)$/i

module.exports = handler
