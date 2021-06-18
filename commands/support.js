const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let support = new Discord.MessageEmbed()
      .setColor('#FFE5B4')   
      .setTitle("Join Support server for queries/suggestions")
      .setDescription("[Join Server](https://discord.gg/75tGbKyNzH)")
      .setFooter(`Support | ©️ 2021 Oikawas`,client.user.displayAvatarURL());

      return message.channel.send(support);
}

module.exports.help = {
  name: "support"
}