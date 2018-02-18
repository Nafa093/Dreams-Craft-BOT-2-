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
const channel = member.guild.channels.find("name", "accueil").send(`Bonjour et bienvenue sur le discord de DreamsCraft ${member.user}. Que la force soit avec toi ! `)
member.addRole(role)
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', 'accueil').send(` ${member.user} a quitté le discord de DreamsCraft. Que la force soit avec lui ! `);
});

client.on('message', message =>{
if (message.content.toLocaleLowerCase() === ("/help")) {
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
value: "``Donne la liste de nos partenaires officiels. Pour plus d'information utilisez /(Nom du partenaire) !``",
inline: true
},{
name: '``/sortie``',
value: "``Donne la date et les partcipants de la prochaine sortie organisé par Loulouemerick & Dremas92.``",
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
message.reply("Voici la liste des serveurs partenaires de DreamsCraft : DisneyWorldParks -  UniversParks  - McDreams ! Pour plus d'information sur un serveur en question, utilisez /(Nom du partenaire) !");
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
if(message.content == ("/sortie")){
message.reply("La prochaine sortie à DisneyLand Paris organisé par Loulouemerick se déroule le 4 mars ! Vous voulez participer ? Contectez Loulouemerick par MP ! Participants actuels : Loulouemerick.");
}
if(message.content == ("/UniversParks")){
message.reply("");
}
if(message.content == ("/McDreams")){
message.reply('McDreams est un serveur en 1.12, qui à pour but de reproduire le célèbre Resort Parisien "Disneyland Paris" sur minecraft avec des détails peu unique ! Ip : McDreams.boxtoplay.com');
}
if(message.content == ("/DisneyWorldParks")){
message.reply("");
}
if (message.content == "/obscur"){
var obscurRole = client.guilds.get(message.guild.id).roles.find("name", "Côté Obscur");

message.reply("est définitivement du côté obscur de la force ! Bienvenue jeune sith.");
message.guild.member(message.author).addRole(obscurRole);
}
if (message.content == "/lumineux"){
var lumineuxRole = client.guilds.get(message.guild.id).roles.find("name", "Côté Lumineux");

message.reply("est définitivement du côté lumineux de la force ! Que la force soit avec toi jeune jedi.");
message.guild.member(message.author).addRole(lumineuxRole);
}

let argument = message.content.split("/clear").slice(1)
if(!argument) return message.channel.send("Merci d'indiquer de respecter le modèle suivant : ``/clear ( nombre de 0 à 100)``").then(m => m.delete(20000))
var person = message.member.permissions
function dot() {
message.channel.bulkDelete(argument);
};
function doNot() {
message.channel.send(" ").then(m => m.delete(20000));
};
person.has("MANAGE_MESSAGES") ? dot() : doNot();

if (message.content.startsWith(prefix + 'annonce')) {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
let args = message.content.split(' ')
args.shift()
message.channel.send(args.join(' '))
    }
	
if (message.content.includes("pute") || message.content.includes("encule") || message.content.includes("fdp") || message.content.includes("batard") || message.content.includes("ta race") || message.content.includes("ta mère") || message.content.includes("ntm") || message.content.includes("salop") || message.content.includes("bougnoule") || message.content.includes("connard") || message.content.includes("ntm") || message.content.includes("Encule") || message.content.includes("Fdp") || message.content.includes("Batard") || message.content.includes("Ta race") || message.content.includes("Ta mère") || message.content.includes("Ntm") || message.content.includes("Salop") || message.content.includes("Bougnoule") || message.content.includes("Connard")) {
if(message.author.bot) return;
message.reply("Merci d'éviter ce genre de langage ! ");
client.channels.get('411217787785183245').send(`${message.author} A dit : "** ${message} ** dans : ${message.channel}"`)
message.delete()
}
	
if (message.content.includes("")) {
if(message.author.bot) return;
if(message.author.Natthh) return;
client.channels.get('414418438614941698').send(`**[ Dans ${message.channel}, ${message.author} a dit ] : ${message}**`)
}	

if (message.content.includes("WaltCraft") || message.content.includes("MagicCraft") || message.content.includes("DisneyPixel") || message.content.includes("Walt Disney Imagineer") || message.content.includes("DLPparks") || message.content.includes("Magic Of Disney") || message.content.includes("Disney Imagineer") || message.content.includes("World of Disney")) {
if(message.author.bot) return;
message.reply("Merci d'éviter la pub ! ");
client.channels.get('411217787785183245').send(`${message.author} A dit : "** ${message} **".`)
message.delete()
}
});
