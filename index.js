const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const Constants  = Discord.Constants; 
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS';
client.config = config;
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();
const eris = require('eris');

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

const mongoose = require('mongoose');
//Make sure to require this model in your message event or index.js if you use message event on there. in this case im going to require it here
const prefix = require('./models/prefix');

mongoose.connect('MONGODB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(` Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Discord.Collection();


fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Command loaded: ${commandName}`);

  
    });

});





    

// Login through the client
client.login(config.token);


client.on('message', message => {
    
    if (message.content === '<@853772078795587624>') {
      
      message.channel.send('My Prefix is **//** !');
    }
  });

  client.on('guildMemberAdd', async member => {
	
    let wChan = db.fetch(`${member.guild.id}`)
    
    if(wChan == null) return;
    
    if(!wChan) return;
    
  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) //We declare a 32px font
    let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE) //We declare a 64px font
    let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
    let mask = await jimp.read('https://i.imgur.com/552kzaW.png') //We load a mask for the avatar, so we can make it a circle instead of a shape
    let welcome = await jimp.read('http://rovettidesign.com/wp-content/uploads/2011/07/clouds2.jpg') //We load the base image
  
    jimp.read(member.user.displayAvatarURL).then(avatar => { //We take the user's avatar
      avatar.resize(200, 200) //Resize it
      mask.resize(200, 200) //Resize the mask
      avatar.mask(mask) //Make the avatar circle
      welcome.resize(1000, 300)
    
    welcome.print(font64, 265, 55, `Welcome ${member.user.username}`) //We print the new user's name with the 64px font
    welcome.print(bfont64, 265, 125, `To ${member.guild.name}`)
    welcome.print(font64, 265, 195, `There are now ${member.guild.memberCount} users`)
    welcome.composite(avatar, 40, 55).write('Welcome2.png') //Put the avatar on the image and create the Welcome2.png bot
    try{
    member.guild.channels.get(wChan).send(``, { files: ["Welcome2.png"] }) //Send the image to the channel
    }catch(e){
      // dont do anything if error occurs
      // if this occurs bot probably can't send images or messages
    }
    })
  
    
    
  })

  client.on('messageCreate', async (msg) => {
    const clientWasMentioned = msg.mentions.find(
        mentionedUser => mentionedUser.id === bot.user.id,
    );
 
    if (clientWasMentioned) {
        try {
            await msg.channel.createMessage('Present');
        } catch (err) {
            // There are various reasons why sending a message may fail.
            // The API might time out or choke and return a 5xx status,
            // or the bot may not have permission to send the
            // message (403 status).
            console.warn('Failed to respond to mention.');
            console.warn(err);
        }
    }
 });

// Login through the client
client.login(process.env.token);
