const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription('Dostum Sarılmak İstediğin Kişiyi Etiketlermisin ? Ne Duruyorsun.')).then(a => a.delete({timeout: 10000}))
var gifler = [
  'https://cdn.glitch.global/5ad96dc3-6da5-40bd-a973-3ffd4524c69e/thumbnails%2Faf501a5f-4ca5-4491-bc18-0bc0c160b1cb.image.png?1658807206590',

];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Üzdü Laaan').setDescription('Bu Kadar Yokluktamısın Lan Gel Bulak Sana :D')).then(a => a.delete({timeout: 10000}))
message.channel.send(`\`\`>\`\` ${message.author} **İsimli Kişi** ${message.mentions.members.first()} **İsimli Kişiye Sarıldı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sarıl'
};