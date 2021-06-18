const bl = require('../me-modals/blacklist/blacklisted')
const me = require('../config.json')
const devs = me.dev
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "unblacklist",
   category: "Security",
   description: "\`لازالة العضوا من القائمة بلاكليست\`",
   run: async (client, kmsg, args, PREFIX) => {
    if (!devs.includes(kmsg.author.id)) {
        return kmsg.reply(`
        > **\ Failed to execute Command ** 
        > **Reason:This Command is only for the bot Owners  **
        `);
    }
    let userid = args[0];
    if (!userid) {
        return kmsg.reply(`
        > **\ Failed to execute Command **
        > **Reason: You must enter the ID **
        `)
    }
    let DATA = await bl.findOneAndDelete({
        UserID: userid
    })
    if(!DATA) {
        return kmsg.reply(`
        > **\ Failed to execute Command **
        > **Reason: This person isn't on the blacklist  **
        `)
    }
    kmsg.channel.send(`
    > **The person has been removed from the blacklist **
    `)
    }
 }