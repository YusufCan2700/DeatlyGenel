const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  message.channel.send(`Kurucularım:** Realwestツ#5415   ✮Reckless✮#8963**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucular', 'developer'],
  permLevel: 0
};

exports.help = {
  name: 'kurucu',
  description: 'Saatı gösterir.',
  usage: 'saat'
};