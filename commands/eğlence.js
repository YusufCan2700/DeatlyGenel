const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Eğlence**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!kaç-cm**', '\`\`\`Kaç CM Olduğuna Bakarsınız.\`\`\`', true)
.addField('**d!aşk**', '\`\`\`Biriyle Aşk Yaşarsınız.\`\`\`', true)
.addField('**d!öp**', '\`\`\`Biriyle Öpüşürsünüz.\`\`\`', true) 
.addField('**d!sarıl**', '\`\`\`Birine Sarılırsınız.\`\`\`', true)
.addField('**d!ateşle**', '\`\`\`Kişiye Ateş Etmene Yarar.\`\`\`', true)
.addField('**d!tokat**', '\`\`\`Birine Tokat Atarsınız.\`\`\`', true)
.addField('**d!balıktut**', '\`\`\`Balık Tutarsınız.\`\`\`', true)   
.addField('**d!atatürk**', '\`\`\`Atatürk Resmini Atar.\`\`\`', true)                        
.addField('**d!zar**', '\`\`\`Zar Atarsınız.\`\`\`', true)
.addField('**d!ara112**', '\`\`\`Ambulansı Ararsınız.\`\`\`', true) 
.addField('**d!ara155**', '\`\`\`Polisi Ararsınız.\`\`\`', true)
.addField('**d!ara110**', '\`\`\`İtfaiyeyi Ararsınız.\`\`\`', true)
.addField('**d!banner**', '\`\`\`Yazdığınız Yazıyı Bannere Çevirir.\`\`\`', true)
.addField('**d!token**', '\`\`\`Tokenimi Gösterir.\`\`\`', true)                     
.addField('**d!aduketçek**', '\`\`\`Etiketlediğiniz Kişiye Aduket Çekersiniz.\`\`\`', true)       
.addField('**d!kralol**', '\`\`\`Kral OLursun.\`\`\`', true)
.addField('**d!şekerye**', '\`\`\`Şeker Yersiniz.\`\`\`', true)    
.addField('**d!stresçarkı**', '\`\`\`Stres Çarkı Çevirirsiniz.\`\`\`', true)   

.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')                 
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["eğlence", "eglence"],
  permLevel: 0

}

exports.help = {
  name: 'takılma'
};