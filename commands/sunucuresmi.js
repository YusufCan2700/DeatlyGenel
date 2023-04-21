const Discord = require('discord.js');
 
exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(embed)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
}


exports.help = {
  name: 'sunuculogo',
  description: 'Sunucuresmi.',
  usage: '!sunucuresmi',
};