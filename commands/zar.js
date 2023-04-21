const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let slm = ['1 çıktı', '2 çıktı', '3 çıktı', '4 çıktı', '5 çıktı', '6 çıktı', '7 çıktı', '8 çıktı', '9 çıktı', 'Oyunun En Güçlüsü Sensin! Artık Zarın "9999999" Çıktı! (şaka)'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`    ${message.author} **Atılıyor...**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} \`\`${slm.random()}\`\` `).setImage('https://cdn.glitch.global/bab9a790-d8eb-4e2c-8bae-ea0d0625d2e7/thumbnails%2Fd3d73f9a-61b3-4157-acef-34ef9309fa5d.image.png?1659609430383'))
}, 4500)
})

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["zar"],
  permLevel: 0
}

exports.help = {
  name: 'zar'
};