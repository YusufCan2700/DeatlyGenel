const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");

  if (mesaj.length < 1) return message.reply("Bir şey yazmalısın");

  message.delete();

  const embed = new Discord.MessageEmbed()

    .setTitle("📣 OYLAMA ")

    .setColor(message.guild.me.displayColor)

    .setDescription(
      `${mesaj}`
    );

  return message.channel.send(embed)
       .then(function(message) {

          message.react("✅").then(emoji => {

            message.react("⛔");

          });

        })
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 2
};
//////FİBER CODE
exports.help = {
  name: "oylama",

  description: "Oylama Yapar.",

  usage: "oylama"
};