import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `\nTotal Fitur 𝙰𝚍𝚛𝚒𝚊𝚗𝙱𝚘𝚝𝚣 Saat ini: ${totalf}`,titlebot + '\n\n' + botdate, './lib/menu.mp4', [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'www.instagram.com/adrianpreset03_',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'https://www.instagram.com/p/CmjLMxjDyo6/?igshid=YmE3OTBmZTA='
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler