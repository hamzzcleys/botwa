let handler = async (m, { conn, isOwner }) => {
    let sw = Object.entries(global.db.data.users).filter(v => v[1].sw)
    let pesan = `
┌「 list sw 」
│ Total : ${sw.length} Users${sw ? '\n' + sw.map(([jid], i) => `
├ ${i + 1}. @${jid.split`@`[0]}
`.trim()).join('\n') : ''}
└────
`.trim()
    m.reply(pesan)
}
handler.help = ['swlist']
handler.tags = ['owner']
handler.command = /^listsw|swlist|daftarsw$/i

handler.owner = 1

module.exports = handler
