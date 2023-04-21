const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://c.tenor.com/Ixz8dxwfaSYAAAAC/kurallar.gif');
hook.send(`\`\`${message.guild.name}\`\` ***Kurallar***

\`\`• Küfür veya küfür kısaltmalarını kullanmayınız.
• Özelden veya genelden reklam yapmayınız.
• Sohbeti işgal edecek şekilde yazmayınız.
• Nedeni ne olursa olsun, aşağılayıcı ve kırıcı sözler kullanmayınız.
• Önemli durumlar olmadıkça yetkilileri etiketlemeyiniz.
• Öneri odasına öneri dışında yazı yazmayınız ve kimseyi etiketlemeyiniz.
• Üyeleri rahatsız edecek şekilde şarkı açmayınız/geçmeyiniz.
• Irk, dil, inanç gibi farklılıklara saygı gösteriniz. homofobi, cinsiyetçilik veya insanlık suçu olabilecek herhangi bir kimliksel ayrımcılık yapmayınız.
• Herhangi bir kanalda üyeleri, bağırarak ya da garip sesler çıkararak rahatsız etmeyiniz.
• Üyelere karşı düşmanca tavır sergilemeyiniz ve taraf oluşturmayınız.
• Cinsel içerikli içerikler paylaşmayınız.
• Oyun kanallarında, oyun oynayan üyeleri oyun dışı konularla rahatsız etmeyiniz.
• Özel durum kısmında kuralları ihlal eden yazılar bulundurmayınız.
• Gereksiz spoiler ve embed vs kullanmayınız.
• Huzura ve düzene zarar verecek davranışlar uyarı sebebidir.
• Sunucuda bulunan üyelerin bilgilerini izinsiz yaymak / ifşalamak yasaktır.
• Reklam yapmak yasaktır.\`\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};