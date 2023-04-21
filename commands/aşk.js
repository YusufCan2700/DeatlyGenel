const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Sevdiğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
let slm = ['0', '24', '55', '77', '88', '99', '1', '2', '3', '4', '5', '100', '101'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${message.author} **Bakılıyor...**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} \`\`Sevdiğin İle Aranda\`\` **${slm.random()}** \`\`Sevgi Bulunmakta.\`\`  `).setImage('https://cdn.glitch.global/5ad96dc3-6da5-40bd-a973-3ffd4524c69e/thumbnails%2Fad0e9800-2e91-4d13-9bbd-1d2c355aeef0.image.png?165880597855'))
}, 4500)
})

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aşk"],
  permLevel: 0
}

exports.help = {
  name: 'sevgi'
};