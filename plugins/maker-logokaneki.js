import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw `Sertakan teksnya !\n\nContoh: .logokaneki 𝙰𝚍𝚛𝚒𝚊𝚗𝙱𝚘𝚝𝚣\n`
  m.reply('Proses...')
  let res = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logokaneki']
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i

export default handler
