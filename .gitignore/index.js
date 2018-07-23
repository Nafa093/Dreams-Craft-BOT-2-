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
