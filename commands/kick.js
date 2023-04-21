const Discord = require('discord.js')

    exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");        
if(!message.member.roles.cache.some){
            const Hyler = new Discord.MessageEmbed()
            .setDescription(`Dostum Yetkin Yok Ne Yaşıyorsun ?`)
            .setColor('#000001')
            .setFooter('')
            return message.channel.send(Hyler)
        }

        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();
        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        let zaman = new Date()
        let Hylerzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const Hyler = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Dostum Lütfen Kullanıcı Belirtirmisin Belirtmezsen Yapamam.**`)
            .setColor('#000001')
            .setFooter('')
            return message.channel.send(Hyler)
        } else if(isNaN(kullanıcı)){
            const Hyler = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Dostum Lütfen Geçerli Kullanıcı Belirtirmisin Belirtmezsen Kickleyemem.**`)
            .setColor('#000001')
            .setFooter('')
            return message.channel.send(Hyler)
        }
        if(!sebep){
            const Hyler = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Dostum Lütfen Sebep Belirtirmisin Belirtmezsen Kickleyemem.**`)
            .setColor('#000001')
            .setFooter('')
            return message.channel.send(Hyler)
        }

        if(kullanıcı && sebep){
            kullanıcı.kick()

            const Hyler = new Discord.MessageEmbed()
            .setDescription(`
          **Başarı İle Kicklendi.** **[Verisi Yok]**
            `)
            .setColor('#000001')
            message.channel.send(Hyler)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['at'],
    permLevel: 0
}

exports.help = {
    name: 'kick'
}