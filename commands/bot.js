const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Bot Bilgi**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!website**', '\`\`\`Website Linkini Gösterir.\`\`\`', true)
.addField('**d!davet**', '\`\`\`Davet Linkini Gösterir.\`\`\`', true)
.addField('**d!discord**', '\`\`\`Discord Linkini Gösterir.\`\`\`', true)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!bot-bilgi**', '\`\`\`Botun Bilgilerine Bakarsınız.\`\`\`', true)
.addField('**d!ping**', '\`\`\`Botun Pingine Bakarsınız.\`\`\`', true)


.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["", "", "bot-komutları"],
  permLevel: 0

}

exports.help = {
  name: 'bot'
};