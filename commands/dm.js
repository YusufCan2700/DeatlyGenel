const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  let etiket = message.mentions.members.first();
  let etiket2 = message.guild.members.cache.get(args[0]);
 
  if (!etiket && !etiket2) {
    message.reply("**Birisini Etiketle veya ID Gir !**");
  }

  let mesaj = args.slice(1).join(" ");
  if (!mesaj) return message.channel.send("**Bir Cevap / Mesaj Gir**");

 const sü = etiket || etiket2
  
  sü.send(mesaj);
  message.channel.send(
    `:white_check_mark: | ${sü} **İsimli / ID'li** Kişiye ***___${mesaj}___*** Mesajını *Başarıyla Gönderdim !*`
  );
};
exports.conf = {
  aliases: ["dm","DM"],
};
exports.help = {
  name: "dm",
};