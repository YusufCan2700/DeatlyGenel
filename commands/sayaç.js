const Discord = require('discord.js');
const fs = require('fs')
const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(":x: Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın!")
  let mkanal = message.mentions.channels.first()
  let sayı = args[1]
  if(!mkanal) return message.reply(":x: Bir Kanal Etiketlemelisin!")
  if(!sayı) return message.reply(":x: Bir Sayı Girmelisin!")
  if(sayı < message.guild.members.size) return message.reply(":x: Sayaç Sayısı Sunucudaki Üye Sayısından Fazla Olmalıdır!\n**Üye Sayısı:** " + message.guild.members.size)
  if(sayı && mkanal) {
    if(!profil[message.guild.id]) {
      profil[message.guild.id] = {
        sayi: sayı,
        kanal: mkanal 
      }
    }
    if(profil[message.guild.id]) {
      profil[message.guild.id].sayi = sayı;
      profil[message.guild.id].kanal = mkanal.id;
    }
    fs.writeFile("./sayaç.json", JSON.stringify(profil), (err) => {
        if(err) message.channel.send("Hata: " + err)
    })
    let nova = new Discord.MessageEmbed()
      .setTitle(":white_check_mark: Sayaç Ayarlandı :white_check_mark:")
      .setDescription(`🔸 **Sayaç Kanalı:** ${mkanal}\n🔸 **Sayaç:** \`${sayı}\``)

      .setColor("RANDOM")
      .setTimestamp()
    message.channel.send(nova)
  }
};

exports.conf = {
  aliases: []
};
exports.help = {
  name: 'sayaç'
};