const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 32767,
});
const token = process.env['token']
const express = require("express")
const app = express();
const qdb = require("quick.db")


app.get('/', (req,res) => {
  res.send('Dino-Bot Activo!');
});

app.listen(3000, () => {
  console.log('Bot Encendido');
}); //Esto pal uptimebot

client.on("ready", () => {
    console.log("Estoy listo!");
 });

module.exports = client;

client.comandos = new Discord.Collection();

require("./handler")(client);

client.snipes = new Map();  
client.on('messageDelete', message => {
  client.snipes.set(message.channel.id,{
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
});          

client.login("OTk5ODAwNDAxMDM5NzQwOTk4.GWThOH.bgXwA77kQt2pYbiIWFybzjPMywN1cYwmnOr9Z0"); 
