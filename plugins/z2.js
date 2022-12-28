import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, '\Apa Kakak:) ', botdate, [
    ['Owner', `.owner`], 
    ['Menu', `.menu`]
], m)

handler.customPrefix = /^(p|tes|𝙱𝚘𝚝𝚣|𝙰𝚍𝚛𝚒𝚊𝚗|halo)$/i
handler.command = new RegExp

export default handler
