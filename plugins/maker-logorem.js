import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw `Sertakan teksnya !\n\nContoh: .logorem 𝙰𝚍𝚛𝚒𝚊𝚗|𝙱𝚘𝚝𝚣\n`
  m.reply('proses..')
  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem']
handler.tags = ['maker']
handler.command = /^(logorem)$/i
handler.register = false

handler.limit = false

export default handler
