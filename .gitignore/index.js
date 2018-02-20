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

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find("name", "reglement");
channel.send(`${member.user}`)
    .then(message =>  message.delete())
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
},{
name: '``/avis``',
value: "``Permet de donner son avis sur le serveur !``",
inline: true
},{
name: '``/suggestion``',
value: "``Permet de donner son avis sur le serveur !``",
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
if(message.content.toLocaleLowerCase() == ("/partenaires")){
message.reply("Voici la liste des serveurs partenaires de DreamsCraft : DisneyWorldParks -  UniversParks  - McDreams ! Pour plus d'information sur un serveur en question, utilisez /(Nom du partenaire) !");
}
if(message.content.toLocaleLowerCase() == ("/dc")){
message.reply("L'ip de DreamsCraft est : DreamsCraft.minecraft-mania.fr en version 1.12.2 de minecraft premium !");
}
if(message.content.toLocaleLowerCase() == ("/soft")){
message.reply("La prochaine Soft-Opening se déroule actuellement du 2 février au 2 mars pour la saison de le force ! Alors, qu'attends-tu pour venir ? ");
}
if(message.content.toLocaleLowerCase() == ("/ouverture")){
message.reply("Il n'y a pas encore de date d'ouverture.");
}
if(message.content.toLocaleLowerCase() == ("/attractions")){
message.reply("Les attractions ouvertes sont : ``Les Tapis Volants d'Aladin`` - `` Rc Racer`` - `` Zig-Zag Spin `` !");
}
if(message.content.toLocaleLowerCase() == ("/sortie")){
message.reply("La prochaine sortie à DisneyLand Paris organisé par Loulouemerick se déroule le 4 mars ! Vous voulez participer ? Contectez Loulouemerick par MP ! Participants actuels : Loulouemerick.");
}
if(message.content.toLocaleLowerCase() == ("/universparks")){
message.reply("UniversParks est un serveur MultiParks en 1.12 ! IP : play.universparks.cf:26267 !");
}
if(message.content.toLocaleLowerCase() == ("/mcdreams")){
message.reply('McDreams est un serveur en 1.12, qui à pour but de reproduire le célèbre Resort Parisien "Disneyland Paris" sur minecraft avec des détails peu unique ! Ip : McDreams.boxtoplay.com !');
}
if(message.content.toLocaleLowerCase() == ("/disneyworldparks")){
message.reply(`disneyworldparks reproduit le célèbre parc " DisneyLand Paris " ! Plus d'informations à venir ! `);
}
if (message.content.toLocaleLowerCase() == "/obscur"){
var obscurRole = client.guilds.get(message.guild.id).roles.find("name", "Côté Obscur");

message.reply("est définitivement du côté obscur de la force ! Bienvenue jeune sith.");
message.guild.member(message.author).addRole(obscurRole);
}
if (message.content.toLocaleLowerCase() == "/lumineux"){
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
	
let embedColor = 10030606
if (message.content.toLocaleLowerCase().includes("pute") || message.content.toLocaleLowerCase().includes("encule") || message.content.includes("fdp") || message.content.toLocaleLowerCase().includes("batard") || message.content.toLocaleLowerCase().includes("ta race") || message.content.toLocaleLowerCase().includes("ta mère") || message.content.includes("ntm") || message.content.toLocaleLowerCase().includes("salop") || message.content.toLocaleLowerCase().includes("bougnoule") || message.content.toLocaleLowerCase().includes("connard") || message.content.toLocaleLowerCase().includes("ntm")) {
if(message.author.bot) return;
message.reply("Merci d'éviter ce genre de langage !");
message.delete()
client.channels.get('411217787785183245').send(
      {
        embed: {
          title: ' Dans ' + message.channel.name + ', ' + message.author.username + ' a dit : ',
          description: message + '',
          color: embedColor,
          footer: {
            text: 'Type : INSULTE - Message Blacklisté'
          }
        }
      }
    )
}	

let embedColorrr = 15907891
if (message.content.includes("")) {
if(message.author.bot) return;
if(message.author.Natthh) return;
client.channels.get('414418438614941698').send(
      {
        embed: {
          title: ' Dans ' + message.channel.name + ', ' + message.author.username + ' a dit : ' ,
          description: message + '',
          color: embedColorrr,
          footer: {
            text: ''
          }
        }
      }
    )
}		

if (message.content.toLocaleLowerCase().includes("waltcraft") || message.content.toLocaleLowerCase().includes("magiccraft") || message.content.toLocaleLowerCase().includes("disneypixel") || message.content.toLocaleLowerCase().includes("walt disney imagineer") || message.content.toLocaleLowerCase().includes("dlpparks") || message.content.toLocaleLowerCase().includes("magic of disney") || message.content.toLocaleLowerCase().includes("disney imagineer") || message.content.toLocaleLowerCase().includes("world of disney")) {
if(message.author.bot) return;
message.reply("Merci d'éviter la pub ! ");
message.delete()
client.channels.get('411217787785183245').send(
      {
        embed: {
          title: ' Dans ' + message.channel.name + ', ' + message.author.username + ' a dit : ',
          description: message + '',
          color: embedColor,
          footer: {
            text: 'Type : PUB - Message Blacklisté'
          }
        }
      }
    )
}	

let embedColorr = 1284672
if (message.content.toLocaleLowerCase().includes("/avis")) {
if(message.author.bot) return;
message.reply("Merci d'avoir donné ton avis ! ");
message.delete()
client.channels.get('415068910300430347').send(
      {
        embed: {
          title: message.author.username + ' a donné son avis : ',
          description: message + '',
          color: embedColorr,
          footer: {
            text: 'Type : AVIS'
          }
        }
      }
    )
}
	
let embedColorr = 2977512
if (message.content.toLocaleLowerCase().includes("/suggestion")) {
if(message.author.bot) return;
message.reply("Merci pour cette suggestion ! Ton idée sera examiné par le staff de DreamsCraft !");
message.delete()
client.channels.get('415550993267163156').send(
      {
        embed: {
          title: message.author.username + " a fait part d'une nouvelle suggestion : ",
          description: message + '',
          color: embedColorr,
          footer: {
            text: 'Type : SUGGESTION'
          }
        }
      }
    )
}
	
});
