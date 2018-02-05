const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/";
client.on("ready", () => {
client.user.setPresence({ game: { name: ' /help ', type: 0}});
console.log('|Le bot est en ligne.|');
});

client.login(token)

client.on('guildMemberAdd', member => {
let role = member.guild.roles.find("name","--=[Visiteur]=--");
const channel = member.guild.channels.find("name", "accueil").send(`Bonjour et bienvenue sur le discord de DreamsCraft ${member.user} ! :smiley: `)
member.addRole(role)
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', 'accueil').send(` ${member.user} a quitté le discord de DreamsCraft !`);
});

client.on('message', message =>{
if (message.content === ("/help")) {
 message.channel.send("", {
embed: {
color: 1000,
author: message.author.name,
title: ' Voici les commandes du DreamsCraft BOT :',
description: ' ',
fields: [{
name: '``/help``',
value: "``Affiche les commandes du DreamsCraft BOT.``",
inline: true
}, {
name: '``/dc``',
value: "``Donne les informations concernant le serveur notamment l'ip.``",
inline: true
}, {
name: '``/soft``',
value: "``Donne la date de la prochaine Soft-Opening et ses informations.``",
inline: true
}, {
name: '``/ouverture``',
value: "``Donne la date de l'ouverture officielle du serveur.``",
inline: true
}, {
name: '``/attractions``',
value: "``Donne la liste complète des attractions ouvertes.``",
inline: true
}, {
name: '``/partenaires``',
value: "``Donne la liste de nos partenaires officiels.``",
inline: true
}
],
thumbnail: {
url: message.client.iconURL
},
footer: {
text: 'Pour toute autres demande, le staff de DreamsCraft se tient à votre disposition.',
}
}
});
}});

client.on('message', message => {
if(message.content == ("/partenaires")){
message.reply("Voici la liste des serveurs partenaires de DreamsCraft : DisneyWorldParks -  UniversParks  - McDreams  !");
}
if(message.content == ("/dc")){
message.reply("L'ip de DreamsCraft est : DreamsCraft.minecraft-mania.fr en version 1.12.2 de minecraft premium !");
}
if(message.content == ("/soft")){
message.reply("La prochaine Soft-Opening se déroule actuellement du 2 février au 2 mars pour la saison de le force ! Alors, qu'attends-tu pour venir ? ");
}
if(message.content == ("/ouverture")){
message.reply("Il n'y a pas encore de date d'ouverture.");
}
if(message.content == ("/attractions")){
message.reply("Les attractions ouvertes sont : ``Les Tapis Volants d'Aladin`` - `` Rc Racer`` - `` Zig-Zag Spin `` !");
}
if(message.content == ("/lumieux")){
message.reply(" est définitivement du côté lumieux de la force ! Que la force soit avec toi jeune jedi. ");
}
if(message.content == ("/obscur")){
message.reply(" est définitivement du côté obscure de la force ! Bienvenue jeune sith.");
}
});
