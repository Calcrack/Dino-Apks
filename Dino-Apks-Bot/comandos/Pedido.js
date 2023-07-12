const Discord = require("discord.js");

module.exports = {
  name: "pedido",
  alias: [],

  run: async (client, message, args) => {
    const member = message.member
    const pedi = args.slice(0).join(' ')
    if(!pedi) return message.reply("Escribe el nombre de la app o juego que quieres que se suba")
    let embed = new Discord.MessageEmbed()
    .setTitle("Pedido!")
    .setDescription(`${pedi}`)
    .setFooter(`Pedido hecho por: ${message.author.tag}`)
    .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    client.channels.cache.get(`999795248781865040`).send({ embeds: [embed]})
    message.reply(`Tu pedido a sido enviado, puedes verlo en <#999795248781865040>`)
}
}