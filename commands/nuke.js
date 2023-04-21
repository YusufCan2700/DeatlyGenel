const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  const onayembed = new Discord.MessageEmbed()
  .setColor("#000001")
  .setTimestamp()
  .setAuthor("DeatlyWing Nuke Sistem;")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
  .setDescription("**!** \n\n**Eğer eğerki bu işlemi onaylarsanız kanal silinicek,**\n**ama geri getirilemeyecektir!**\n**Ama Kanalın Kopyası Oluşucaktır.** \n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
		} else {
			message.reply('Nuke İşlemi Başarıyla İptal Ettim.');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.reply('**Hata Aldı Tekrar Dene.**');
	});
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "",
  usage: 'nuke'
}