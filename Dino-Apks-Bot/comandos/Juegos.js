const Discord = require("discord.js");

module.exports = {
  name: "juego",
  alias: [],

  run: async (client, message, args) => {
  let apks = args.slice()

    var nombre = args.slice(6).join(' ')

let tamano = apks[0];        
let version = apks[1];
let image = apks[2];        
let link = apks[3];
let virus = apks[4];
let play = apks[5];

      let permiso = message.member.permissions.has("KICK_MEMBERS")
if(!permiso)return message.channel.send("No tienes suficientes permisos!")
    message.delete().catch(err => { return false; })

    const Juego = new Discord.MessageEmbed()
.setTitle(`${nombre}`)
      .setURL(`${link}`)
      .setImage(`${image}`)
  .setDescription(`Tamaño: ${tamano} MB \nVersión: ${version}`)

      const row = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  .setURL(`${link}`)
.setLabel("Link")
.setStyle("LINK")
.setEmoji("🦖"),
  new Discord.MessageButton()
  .setURL(`${virus}`)
.setLabel("VirusTotal")
.setStyle("LINK")
.setEmoji("👾"),
  new Discord.MessageButton()
  .setURL(`${play}`)
.setLabel("Info")
.setStyle("LINK")
.setEmoji("ℹ")
  )
  

message.channel.send({ embeds: [Juego], components: [row] }).then(msg => {
        msg.react(`<:Testiado:1000221006486581318>`)
    });

}
  
      }
