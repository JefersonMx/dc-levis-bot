const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./utils/messageEmbed');

require('dotenv').config();

const rules = require('./messages/rules.json');
const url = require('./messages/url.json');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
    console.log(msg.content);
    if (msg.content.toLocaleLowerCase() === 'hola') {
      msg.reply('Hola brrrrr');
      msg.react('😎');
    }
    else if (msg.content.toLocaleLowerCase() === '!reglas') {
      const author = msg.author.username
      //msg.channel.send(`Estas son las reglas, ${author}`)
      msg.channel.send(messageEmbed({
        authorName: author,
        title: rules.customMessage,
        content: rules.rules
      }))
    }
    else if (msg.content.toLocaleLowerCase() === 'adios') {
      msg.reply('shu, ve a dormir pto');
      msg.channel.send(url.url);
    }
});

client.on('ready', ()=>{
    console.log(`Conectado... ${client.user.tag}`);
});



client.login(DISCORD_TOKEN);