const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Kullanıcı**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!ejderha-logo**', '\`\`\`Ejderha Logo Yapmanıza Yarar.\`\`\`', true)
.addField('**d!alev-logo**', '\`\`\`Alevli Logo Yapmanıza Yarar.\`\`\`', true)
.addField('**d!altın-logo**', '\`\`\`Altın Logo Yapmanıza Yarar.\`\`\`', true)
.addField('**d!arrow-logo**', '\`\`\`Arrow Logo Yapmanıza Yarar.\`\`\`', true)
.addField('**d!dinamik-logo**', '\`\`\`Dinamik Logo Yapmanıza Yarar..\`\`\`', true)
                     
.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!elmas-logo**', '\`\`\`Elmas Logo Yapmanıza Yarar.\`\`\`', true)
.addField('**d!yakında**', '\`\`\`YAKINDA EKLENİCEKTİR.\`\`\`', true)
.addField('**d!yakında**', '\`\`\`YAKINDA EKLENİCEKTİR.\`\`\`', true)
.addField('**d!yakında**', '\`\`\`YAKINDA EKLENİCEKTİR.\`\`\`', true)
.addField('**d!yakında**', '\`\`\`YAKINDA EKLENİCEKTİR.\`\`\`', true)


.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["logo-sistem", "lg", "logosistem"],
  permLevel: 0

}

exports.help = {
  name: 'logo'
};