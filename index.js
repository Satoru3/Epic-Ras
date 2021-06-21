//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const bot = new Discord.Client();

const gacha = require('./gacha');

//Set listener on 'ready'
bot.on('ready', () => {
  console.log('Prêt pour les invocs!');
});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'gacha') {
    message.channel.sendMessage(gacha.pull());
  }
});

bot.login('process.env.TOKEN');
