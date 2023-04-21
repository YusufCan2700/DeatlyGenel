const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Kilit Sistemi;**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!kanal-kilit**', '\`\`\`Kanalı Kitlemenize Yarar.\`\`\`', true)
.addField('**d!kilit-aç**', '\`\`\`Kiliti Açmanıza Yarar.\`\`\`', true)

.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kilit-system", "unlock-system"],
  permLevel: 0

}

exports.help = {
  name: 'kilit-sistem'
};