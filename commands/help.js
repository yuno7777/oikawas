const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setColor('#FFE5B4')    
     
      .setTitle("Command List")
      .setDescription("Below are Commands you can do with Bot.")
      .addField("Moderation", "`Ban`,`Unban`,`roleinfo`,`role`,`setmodlogchannel`,`setnick`,`setsuggest`,`slowmode or sm`,`totalbans`,`report`")
      .addField("Fun","`8ball`,`meme`,`pokemon <name>`,`color`,`invert`,`rate`,`cat`,`cuddle`,`dog`,`feed`,`hug`,`jail`,`kiss`,`math`,`owoify`,`pat`,`poke`,`rip`,`slap`")
      .addField("Utility", "`ping`,`say`,`avatar`,`snipe`,`roll`,`steal`,`embed`,`suggest`,`Use this to reply to a suggestion - [p]reply <msg id> <reason>`,`urban`,`serverinfo`,`whois`", true)
      .addField("Invite the bot to your server", "`invite`")
      .setTimestamp()
      .setFooter("Oikawas | Developed by pancake #6996", client.user.displayAvatarURL());
  

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
