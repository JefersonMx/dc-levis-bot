const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
    console.log(msg.content);
    if (msg.content.toLocaleLowerCase() === 'hola') {
      msg.reply('io');
      msg.reply(':thinking:');
    }
});

client.on('ready', ()=>{
    console.log(`Conectado... ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);