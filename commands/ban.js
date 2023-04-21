const Discord = require('discord.js')

    exports.run = (client, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");     
   if(!message.member.roles.cache.has){
            const yetersizyetki = new Discord.MessageEmbed()
            .setDescription(` Dostum Yetkin Yok Ne Yaşıyorsun ?`)
            .setColor('#000001')
            return message.channel.send(yetersizyetki)
        }
        let user = message.mentions.members.first();
        let sebep = args.slice(1).join(' ');
    
        if(!user){
            const etiketgerekli = new Discord.MessageEmbed()
            .setDescription(`  ${message.author} **Bir kişi etiketlermisin Etiketlemezsen Yapamam.**`)
            .setColor('#000001')
            return message.channel.send(etiketgerekli)
        }
        if(!sebep){
            const sebepyok = new Discord.MessageEmbed()
            .setDescription(`  ${message.author} **Ban sebebi belirtmisin Belirtmezsen Yapamam.**`)
            .setColor('#000001')
            return message.channel.send(sebepyok)
        }

        if(user && sebep){
            user.ban({reason: sebep})

            const banlandi =  new Discord.MessageEmbed()
            .setDescription(`**Etiketlediğiniz Kişi Başarılı Bir Şekilde Banlandı**

              **Banlayan Kişi** \`\`${message.author}\`\` `)
            .setImage('https://cdn.glitch.global/bab9a790-d8eb-4e2c-8bae-ea0d0625d2e7/7957e001-7927-477a-85e5-25cafbf20541.image.png?1659604160968')
            .setAuthor(``, message.author.avatarURL({dynamic: true}))
            .setColor('#000001');
            message.channel.send(banlandi)
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yasakla'],
    permLevel: 0
}

exports.help = {
    name: 'ban'
}