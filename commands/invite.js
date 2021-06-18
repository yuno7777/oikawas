const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
      .setColor('#FFE5B4')   
      .setTitle("Add me to your server")
      .setDescription("[Click Here](https://discord.com/api/oauth2/authorize?client_id=853772078795587624&permissions=4228906231&scope=bot)")
      .setFooter(`Invite Link | ©️ 2021 Oikawas`,client.user.displayAvatarURL());

      return message.channel.send(invite);
}

module.exports.help = {
  name: "invite"
}