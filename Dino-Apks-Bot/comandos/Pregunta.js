const Discord = require("discord.js");

module.exports = {
  name: "pregunta",
  alias: [],

  run: async (client, message, args) => {
    const member = message.member
    const suge = args.slice(0).join(' ')
    if(!suge) return message.reply("Escribe una pregunta que quieras hacerle al staff sobre las apks o el servidor")
    let embed = new Discord.MessageEmbed()
    .setTitle("Pregunta!")
    .setDescription(`${suge}`)
    .setFooter(`Pregunta hecha por: ${message.author.tag}`)
    .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    client.channels.cache.get(`999798148547485778`).send({ embeds: [embed]})
    message.reply(`Tu pregunta a sido enviada, puedes verla en <#999798148547485778>`)
}
}