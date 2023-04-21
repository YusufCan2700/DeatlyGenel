const Discord = require("discord.js");

exports.run = async (client, message) => {

  let embed = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setTitle("Dbl İstatistik")

   .setImage("https://blog.top.gg/content/images/2021/12/Avatar---New-Logo-2.png")

  const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = embed

    const butonmesaj = "https://top.gg/bot/1080560069604823120/vote"

    fetch(`https://discord.com/api/v9/channels/${kanal}/messages`, {

        method: "POST",

        body: JSON.stringify({"embed":mesaj,

            "components":

            [

              {

                "type": 1,

                "components": [

                    {

                        "type": 2,

                        "label": butonmesaj,

                        "style": 5,

                        "url": ""

                    }

]

            }

            ],

                             }),

        headers: {

            "Authorization": `Bot ${client.token}`,

            "Content-Type": "application/json"

        }

    })

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["topgg", "dbl"],

  permLevel: 0

};

exports.help = {

  name: "dbli",

  description: "Botun top.gg istatistiğini gösterir",

  usage: "dblistatistik"

};