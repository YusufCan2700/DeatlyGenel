const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let guild = message.guild;
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  guild
    .fetchBans()
    .then(modsal =>
     message.channel.send(`
         **Sunucunuzda Toplamda** **${modsal.size}** **Üye Banlanmış Gözükmektedir.**
      `)
    )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["bansay"],
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "ban-say",
  description: "",
  usage: "bansay"
};