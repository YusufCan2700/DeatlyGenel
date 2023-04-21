const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`<:member:1005868300145795235>  **Hyler extra Yardım**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('<:staff:1005868302054199399> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)
.addField('<:vip:1005868309436174456> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)
.addField('<:vip:1005868309436174456> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('<:vip:1005868309436174456> **h!yakında **', '\`\`\`yakında eklencek.\`\`\`', true)
.addField('<:vip:1005868309436174456> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)
.addField('<:vip:1005868309436174456> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('<:onayl:1005868312070197360> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)
.addField('<:onayl:1005868312070197360> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)
.addField('<:onayl:1005868312070197360> **h!yakında**', '\`\`\`yakında eklencek.\`\`\`', true)

.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["extra", "extra", "extra"],
  permLevel: 0

}

exports.help = {
  name: 'extra'
};