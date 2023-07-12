const { MessageEmbed}= require("discord.js");

module.exports = {
  name: "user",
  alias: [],

run: async (client, message, args) => {

    const member = message.mentions.members.first() || message.member

    function formatDate (template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
          return template.split(specs[i]).join(item)
        }, template)
      }

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**INFORMACIÓN DEL USUARIO:**")
        .addField("**:ticket: Nombre**:", "**" + `${member.user.tag}` + "**")
        .addField("**:tickets: ID**:", `${member.id}` )
        .addField("**:pushpin: Apodo del usuario**:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`, true)
        .addField("**:bellhop: Fecha de Ingreso al Servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))
        .addField("**:inbox_tray: Cuenta Creada:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt))
        .addField("**:military_medal: Roles:**", `${member.roles.cache.map(r => r).join(' ').replace("@everyone"," ")}`)
        .addField("**:rocket: ¿Boostea?**:", member.premiumSince ? '**Estoy boosteando**' : '**No estoy boosteando**')
        .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()
        message.channel.send({ embeds: [embed]})
 }

                         }