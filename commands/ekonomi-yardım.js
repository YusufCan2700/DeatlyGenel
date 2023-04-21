const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Ekonomi**`)


.addField('**d!günlük**', '\`\`\`24 saat aralıkla 2300-2700 arası para kazanırsınız.\`\`\`', true)
.addField('**d!para**', '\`\`\`Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.\`\`\`', true)                     
.addField('**d!gönder**', '\`\`\`Etiketlediğiniz kullanıcıya para gönderirsiniz.\`\`\`', true)
.addField('**d!soygun**', '\`\`\`14 dakikada bir soygun yaparsınız.\`\`\`', true)
.addField('**d!çalış**', '\`\`\`Rastgele bir işte çalışıp maaş alırsınız.\`\`\`', true)       
.addField('**d!yatır**', '\`\`\`Kendi cüzdanınızdan bankaya para yatırırsınız.\`\`\`', true)
.addField('**d!çek**', '\`\`\`Bankadan kendi cüzdanınıza para çekersiniz.\`\`\`', true)
.addField('**d!çal**', '\`\`\`Etiketlediğiniz kişinin cüzdanından para çalarsınız.\`\`\`', true)        
.addField('**d!bahis**', '\`\`\`Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.\`\`\`', true)  
.addField('**d!slot**', '\`\`\`Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.\`\`\`', true)  
.addField('**d!balık-tut**', '\`\`\`Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.\`\`\`', true)  
             
.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["", "", ""],
  permLevel: 0

}

exports.help = {
  name: 'ekonomi'
};