import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix + command} minecraft`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Search result*
${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

export default handler