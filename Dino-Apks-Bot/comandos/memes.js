const got = require('got')
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    aliases: [],
    run: async (client, message, args) => {
    let RN = Math.floor(Math.random() * 100 ) + 1
      got('https://www.reddit.com/r/MobBot/random/.json').then(res => {
      let content = JSON.parse(res.body)
     const a = content[0].data.children[0].data.url
const b = ["https://media.discordapp.net/attachments/873451298945630280/920808872799776828/VID-20211123-WA0017-2.mp4", "https://media.discordapp.net/attachments/873451298945630280/921243580998246450/25_Me-pregunto-que-me-dirias-si-pudieras-hablar.mp4"]
let bs = b[Math.floor(Math.random() * b.length)]
if(RN > 15) {
	message.channel.send(a)
} else {
	message.channel.send(bs)}});
    }
      } 
