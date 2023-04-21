const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Pingim")
  .setColor("RANDOM")
  .setDescription(`📶 Bot Gecikmesi ${client.ws.ping}`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping'
};
 