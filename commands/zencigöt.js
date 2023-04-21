const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://galeri12.uludagsozluk.com/585/siyahzenci-nin-gotu_672499.gif","https://preview.redd.it/zenci-g%C3%B6t-seviyonuz-mu-neden-v0-lnuuzwonc7x91.jpg?width=640&crop=smart&auto=webp&s=872ea1de541a92af6ce0708e357cdcab033749f5","https://external-preview.redd.it/15lWYQZXd5uaJW1fOZRabMMS_91nJgM49t-X-eXNpP8.png?format=pjpg&auto=webp&s=0056e871e2ecfdf4c5ed9c4d266a846ba2088803","https://external-preview.redd.it/uplzalakOhUirrZF_vuz2hB_kWXIvb5HqAIok6SSATs.png?format=pjpg&auto=webp&s=c9f5a8d8e5852bc46dc7b4a6faf7a8d467beaedb","https://external-preview.redd.it/Z8MStQtAFOQw1SjEgJc8GCXwIvxGiK-amm6O1FY2bAY.png?format=pjpg&auto=webp&s=f631674589fd0a234d3ab0c3511f65dfa80ae377"];
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(replies[result]);

message.channel.send(gifembed);



};

exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['frostyzencigotyiyor','zenci','göt','frosty'],
  permLevel: 0

};

exports.help = {



  name: 'zencigöt',
  description: 'baby',
  usage: 'baby'

};