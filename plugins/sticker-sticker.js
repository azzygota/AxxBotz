//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      m.reply(global.wait)
      stiker = await sticker(img, false, ' ', '©𝙰𝚍𝚛𝚒𝚊𝚗 𝚇 𝙽𝚊𝚒𝚜𝚊 : wa.me/6285860928363\n\n(  www.instagram.com/adrianpreset03  )')
    } else if (args[0]) stiker = await sticker(false, args[0],  ' ', '©𝙰𝚍𝚛𝚒𝚊𝚗 𝚇 𝙽𝚊𝚒𝚜𝚊 : wa.me/6285860928363\n\n(  www.instagram.com/adrianpreset03   )')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s','sticker','stiker']

export default handler