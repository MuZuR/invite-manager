const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)

  let msj = args.slice(0).join(" ");
  if (!msj) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir mesaj belirtiniz!\n\nDeğişkenler:\n-uye- = Üyenin adını atar.\n-uyetag- = Üyeyi taglar.\n-sunucu- = Sunucu adını atar.\n-daveteden- = Davet edeni atar.\n-davetoldu- = Yeni davet sayısını atar.`
        )
        .setColor("BLUE")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(`Davet Bb mesajı; ${msj} olarak ayarlandı!`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);

  db.set(`davetmsjbb_${message.guild.id}`, msj);
};

module.exports.conf = {
  aliases: ["davet-mesaj-bb"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet mesaj bb",
  description: "",
  usage: ""
};
