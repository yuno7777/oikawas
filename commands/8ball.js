const Discord = require("discord.js");

exports.run = async (bot, message, args, customisation) => {
    if(!args[0]) return message.reply("Please ask a full question");
    let replies = [
        'It is certain.'
  , 'It is decidedly so.'
  , 'Without a doubt.'
  , 'Yes - definitely.'
  , 'You may rely on it.'
  , 'As I see it, yes.'
  , 'Most likely.'
  , 'Outlook good.'
  , 'Yes.'
  , 'Signs point to yes.'
  , 'Reply hazy, try again.'
  , 'Ask again later.'
  , 'Better not tell you now.'
  , 'Cannot predict now.'
  , 'Concentrate and ask again.'
  , 'Don\'t count on it.'
  , 'My reply is no.'
  , 'My sources say no.'
  , 'Outlook not so good.'
  , 'Very doubtful.'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setTitle("Magic 8ball")
    .setColor("#ffc0cb")
    .addField("Q:", question)
    .addField("A:", replies[result])
    .setFooter(`© Oikawas | 8ball`);

    message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: '8ball',
    description: 'Ask the bot a Question.',
    usage: '8ball (question)',
    category: "Fun"
  };