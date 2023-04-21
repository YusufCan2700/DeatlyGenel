const Discord = require("discord.js");


exports.run = (client, message, params) => {
  if (!message.guild) {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(EmbedFwhyCode);
 
}
  if (message.channel.type !== "dm") {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " İtfaiye Geliyor!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("https://www.hareketligifler.net/data/media/1193/itfaiye-arabasi-hareketli-resim-0020.gif");

return message.channel.send(EmbedFwhyCode);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ara110",
  description: "FwhyCode",
  usage: "ara155"
};
