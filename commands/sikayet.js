const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join(' ')
        
        if(!sikayetmesaj){
            const vegashata = new Discord.MessageEmbed()
            .setDescription(`**Şikayetini Girmen Gerekiyor**`)
            .setColor('#ff0000')
            return message.channel.send(vegashata)
        }

        // Zaman
        var zaman = new Date(); 
        var vegaszaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun İnvitesi İçin
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const vegassikayet = new Discord.MessageEmbed()
                .setDescription(`
                    **${message.guild.name}** Adlı Sunucudan ${message.author} Kişisi Bot Hakkında Şikayette Bulundu, Edilen Şikayet - **${sikayetmesaj}**\n
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**Şikayet Var**`)
                .setFooter(vegaszaman)
                client.channels.cache.get('1082053059070402593').send(vegassikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Şikayet','Report','ŞİKAYET','REPORT','öneri'],
    permLevel: 0
}

exports.help = {
    name: 'şikayet'
}