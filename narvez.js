const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader")(client);

client.ayarlar = { 
"prefix": "d!",
}

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  const data = require('quick.db');
  console.log('')
  console.log(`${files.length} kadar komut yüklenecek.`)
  files.forEach(async f => {
    let props = require(`./commands/${f}`);
    console.log(`Yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log('DeatlyWing Pinglendi')

});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.owner.id) permlvl = 4;
  return permlvl;
};

var reg= /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g


///NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ
///NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ
///NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ
client.login(process.env.token)
///NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ
///NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ
///NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ NARVEZ

client.on("message", async msg => {
const db = require("quick.db");
})


var oyun = [
    "d!yardım",
    "7/24 AKTİF",
    "Hayalindeki Topluluğu Oluştur",
    "Yeni Güncelleme Çok Yakında",
  ];
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
///// seste aktif bot//////

/////son üye/////
////// ---- MESAJ SİLİNME ---- //////

client.on('guildCreate', guild => {
guild.owner.send(new Discord.MessageEmbed()
.setTitle("Beni Eklediğin İçin Teşekkürler")
.setColor("BLACK")
.setDescription(`
Komutlara Bakmak İçin \`d!yardım\`
Destek Sunucumuza Gelerek Bot İle İlgili Detaylı Bilgi Alabilirsiniz
https://discord.gg/hwbA2s8Y`))

}); 

//// yeni eklenti /////

client.on("guildMemberAdd", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.cache.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.memberCount);
    sayaçkanal.send(
      "🔹 `" +
        `${member.user.tag}` +
        "` Sunucuya Katıldı \n🔹 `" +
        sayaçsayı +
        "` Kişi Olmamıza `" +
        aralık +
        "` Kişi Kaldı! \n🔹 `" +
        member.guild.memberCount +
        "` Kişiyiz!"
    );
  } 
});

client.on("guildMemberRemove", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.cache.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.memberCount);
    sayaçkanal.send(
      "🔸 `" +
        `${member.user.tag}` +
        "` Sunucudan Ayrıldı! \n🔸 `" +
        sayaçsayı +
        "` Kişi Olmamıza `" +
        aralık +
        "` Kişi Kaldı! \n🔸 `" +
        member.guild.memberCount +
        "` Kişiyiz!"
    );
  }
});

////// deneme/////

var stl = "1082053059070402593"
client.on("messageReactionAdd", async event => {
  var starchan = client.channels.cache.get(stl)
    if (event.emoji.name !== "⭐") return
    var chan = client.channels.cache.get(event.message.channel.id)
    var msg = await chan.messages.fetch(event.message.id)
    var rs = msg.reactions.cache.get("⭐").users.cache.size
    if (rs > 1) {
      var embed = new Discord.MessageEmbed()
      embed.setAuthor(msg.author.tag, msg.author.avatarURL())
      embed.setTitle(`Yıldızlanan Mesaj!`)
      embed.setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      embed.addField("Kanal: ", chan, true)
      embed.addField("Mesaj sahibi: ", msg.author.tag, true)
      embed.setColor("GOLD")
      embed.setThumbnail(msg.author.avatarURL())
      embed.setTimestamp()
      embed.addField("**Mesaja git:** ", `[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`)

      if (msg.content) {
        embed.addField("Mesaj:", msg.content, true)
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url)
      }

      embed.setFooter(`⭐ ${rs} | ${msg.author.id}`)

      if (db.get(`star.${msg.id}`) === true) {
        var msj = await starchan.messages.fetch(db.get(`star.${msg.id}`))
        msj.edit(embed)
      } else {
        starchan.send(embed).then(mesaj => {
          db.set(`star.${msg.id}`, mesaj.id)
        });
      }
    }

  
})


client.on("messageReactionRemove", async event => {
  var starchan = client.channels.cache.get(stl)
    if (event.emoji.name !== "⭐") return;
    var chan = client.channels.cache.get(event.message.channel.id)
    var msg = await chan.messages.fetch(event.message.id)
    if (!db.get(`star.${msg.id}`)) return
    var lmsg = await starchan.messages.fetch(db.get(`star.${msg.id}`))
    var rs = msg.reactions.cache.get("⭐").users.cache.size || 0

    if (rs > 1) {
      var embed = new Discord.MessageEmbed()
      embed.setAuthor(msg.author.tag, msg.author.avatarURL())
      embed.setTitle(`Yıldızlanan Mesaj!`)
      embed.setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      embed.addField("Kanal: ", chan, true)
      embed.addField("Mesaj sahibi: ", msg.author.tag, true)
      embed.setColor("GOLD");
      embed.setThumbnail(msg.author.avatarURL())
      embed.setTimestamp()
      embed.addField("**Mesaja git:** ", `[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`)
      if (msg.content) {
        embed.addField("Mesaj:", msg.content, true)
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url)
      }

      embed.setFooter(`⭐ ${rs} | ${msg.author.id}`)

      if (db.get(`star.${msg.id}`) === true) {
        lmsg.edit(embed)
      }
    } else {
      db.delete(`star.${msg.id}`)
      lmsg.delete({timeout:100})
    }
});  


////// cekiliş /////

////Sahip Giriş Sistem/////
client.on("guildMemberAdd", member => {
  if (member.id !== '885894418190712834') return;
  let channels = member.guild.channels.cache.filter(channel => channel.permissionsFor(client.user.id).has("SEND_MESSAGES") && channel.type === "text");
  if (!channels) return;
  let ch = channels.random();
  ch.send(`Açılın! Kurucularımdan biri ${member.user.tag} sunucuya katıldı!`);
  member.send("Hoş geldin sahip!");
  return;
});

client.on("guildMemberAdd", member => {
  if (member.id !== '1072661474524270634') return;
  let channels = member.guild.channels.cache.filter(channel => channel.permissionsFor(client.user.id).has("SEND_MESSAGES") && channel.type === "text");
  if (!channels) return;
  let ch = channels.random();
  ch.send(`Açılın! Kurucularımdan biri ${member.user.tag} sunucuya katıldı!`);
  member.send("Hoş geldin Kurucum");
  return;
});

