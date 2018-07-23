const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = ".";


client.login(token)

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find("name", "bienvenue").send(`Bienvenue chez les CoasterFans ${member.user} !`)
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', 'bienvenue').send(` **${member.user.username}** est parti de chez les CoasterFans !`);
});

client.on('message', message =>{
    
if (message.content.startsWith(prefix + 'annonce')) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
let args = message.content.split(' ')
args.shift()
message.channel.send(args.join(' '))
    }
 
});
