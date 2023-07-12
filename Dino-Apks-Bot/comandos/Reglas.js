const Discord = require("discord.js");

module.exports = {
  name: "reglas",
  alias: [],

  run: async (client, message, args) => {
    const member = message.member
    const suge = args.slice(0).join(' ')
    if(!suge) return message.reply("Escribe una pregunta que quieras hacerle al staff sobre las apks o el servidor")
    let embed = new Discord.MessageEmbed()
    .setTitle("Reglas")
    .setDescription(`${suge}`)
    .setImage(`https://media.discordapp.net/attachments/999822432250630204/1001205099055550494/IMG_20220724_231602.jpg`)
    message.channel.send({ embeds: [embed]})
    message.reply(`Tu pregunta a sido enviada, puedes verla en <#999798148547485778>`)
}
}