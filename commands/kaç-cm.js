const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let slm = ['2', '4', '8', '12', '15', '20', '24', '26', '32', '38', '41', '54', '60'];
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${message.author} **Hemen Bakıyorum...**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} **Krallığın \`\`${slm.random()}CM\`\` Woow!**`).setImage('https://cdn.glitch.global/5ad96dc3-6da5-40bd-a973-3ffd4524c69e/thumbnails%2Ffe2979a3-6907-4474-ab1e-60e524c04c37.image.png?1658805867486'))
}, 4500)
})

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kaç-cm"],
  permLevel: 0
}

exports.help = {
  name: 'kaçcm'
};