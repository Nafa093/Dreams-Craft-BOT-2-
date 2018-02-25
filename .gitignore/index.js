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
const help = {
  "url": " ",
  "color": 1073142,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Pour toute autres demande, le staff de DreamsCraft se tient à votre disposition."
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png"
  },
  "author": {
    "name": 'Toutes mes commandes commencent par " / " : ',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png"
  },
  "fields": [
    {
      "name": "``/help``",
      "value": "``Affiche les commandes du DreamsCraft BOT.``",
      "inline": false
    },
    {
      "name": "``/dc``",
      "value": "``Donne les informations concernant le serveur notamment l'ip.``",
      "inline": false
    },
    {
      "name": "``/soft``",
      "value": "``Donne la date de la prochaine Soft-Opening et ses informations.``",
      "inline": false
    },
    {
      "name": "``/ouverture``",
      "value": "``Donne la date de l'ouverture officielle du serveur.``",
      "inline": false
    },
    {
      "name": "``/attractions``",
      "value": "``Donne la liste complète des attractions ouvertes.``",
      "inline": false
    },
    {
      "name": "``/spectacles``",
      "value": "``Donne les horaires des prochains spectacles.``",
      "inline": false
    },  
	{
      "name": "``/partenaires``",
      "value": "``Donne la liste de nos partenaires officiels. Pour plus d'information utilisez /(Nom du partenaire) !``",
      "inline": false
    },
    {
      "name": "``/sortie``",
      "value": "``Donne la date et les partcipants de la prochaine sortie organisé par Loulouemerick & Dremas92.``",
      "inline": false
    },
	{
      "name": "``/avis``",
      "value": "``Permet de donner son avis sur le serveur !``",
      "inline": false
    },
	{
      "name": "``/suggestion``",
      "value": "``Permet de faire part d'une suggestion au staff !``",
      "inline": false
    },
	 {
      "name": "``/version``",
      "value": "``Permet de connaître ma derrnière version et mes derniers ajouts !``",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/help")){
 message.channel.send({embed: help});
 }

const helpstaff = {
  "url": " ",
  "color": 1073142,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Pour toute autres demande, Natthh se tient à votre disposition."
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png"
  },
  "author": {
    "name": 'Commande uniquement réservé aux staffs :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png"
  },
  "fields": [
    {
      "name": "``/clear (nombre)``",
      "value": "``Efface le nombre de message indiqué dans la commande.``",
      "inline": false
    },
    {
      "name": "``/annonce (message)``",
      "value": "``Permet de faire parler le bot. ( Permission ADMIN obligatoire )``",
      "inline": false
    },
    {
      "name": "``A VENIR : /mute (membre) ``",
      "value": "``Permet de muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``A VENIR : /kick (membre) ``",
      "value": "``Permet de kick un membre du discord.``",
      "inline": false
    },
	{
      "name": "``A VENIR : /ban (membre)``",
      "value": "``Permet de ban un membre du discord.``",
      "inline": false
    }
  ]
};

if (message.content.toLocaleLowerCase() == "/helpstaff") {
if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.channel.send("Tu n'as pas la permissions !");
message.delete()
message.channel.send({embed: helpstaff})
}

});

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
if(message.content.toLocaleLowerCase() == ("/spectacles")){
message.reply('Tout les soirs de cette semaine, tu peux retrouver " Le Show Galactique " à 21h ! ');
}
if(message.content.toLocaleLowerCase() == ("/attractions")){
message.reply("Les attractions ouvertes sont : ``Les Tapis Volants d'Aladin`` - `` Rc Racer`` - `` Zig-Zag Spin `` - ``Crush Coaster`` !");
}
if(message.content.toLocaleLowerCase() == ("/version")){
message.reply("Je suis actuellement en version ``2.0`` ! Mes derniers ajouts sont les commandes : ``/McDreams`` - ``/UniversParks`` - ``/DisneyWorldParks`` - ``/sortie`` - ``/spectacles`` - ``/avis`` - ``/suggestion`` ! ");
}
if(message.content.toLocaleLowerCase() == ("/sortie")){
message.reply("La prochaine sortie à DisneyLand Paris organisé par Loulouemerick se déroule le 6 mars ! Vous voulez participer ? Contectez Loulouemerick par MP ! Participants actuels : Loulouemerick.");
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
	
const insultelogs = {
  "url": "",
  "color": 10030606,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Type : INSULTE "
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": "Dans " + message.channel.name + ", " + message.author.username + " à dit : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.toLocaleLowerCase().includes("pute") || message.content.toLocaleLowerCase().includes("encule") || message.content.includes("fdp") || message.content.toLocaleLowerCase().includes("batard") || message.content.toLocaleLowerCase().includes("ta race") || message.content.toLocaleLowerCase().includes("ta mère") || message.content.includes("ntm") || message.content.toLocaleLowerCase().includes("salop") || message.content.toLocaleLowerCase().includes("bougnoule") || message.content.toLocaleLowerCase().includes("connard") || message.content.toLocaleLowerCase().includes("ntm")) {
if(message.author.bot) return;
message.reply("Merci d'éviter ce genre de langage !");
message.delete()
client.channels.get('411217787785183245').send({embed: insultelogs})
}	

const messagelogs = {
  "url": "",
  "color": 15853885,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Type : MESSAGE "
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": "Dans " + message.channel.name + ", " + message.author.username + " à dit : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.includes("")) {
if(message.author.bot) return;
client.channels.get('414418438614941698').send({embed: messagelogs})
}				

const publogs = {
  "url": "",
  "color": 10030606,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Type : PUB "
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": "Dans " + message.channel.name + ", " + message.author.username + " à dit : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.toLocaleLowerCase().includes("waltcraft") || message.content.toLocaleLowerCase().includes("magiccraft") || message.content.toLocaleLowerCase().includes("disneypixel") || message.content.toLocaleLowerCase().includes("walt disney imagineer") || message.content.toLocaleLowerCase().includes("dlpparks") || message.content.toLocaleLowerCase().includes("magic of disney") || message.content.toLocaleLowerCase().includes("disney imagineer") || message.content.toLocaleLowerCase().includes("world of disney")) {
if(message.author.bot) return;
message.reply("Merci d'éviter la pub ! ");
message.delete()
client.channels.get('411217787785183245').send({embed: publogs})
}		
	

const avislogs = {
  "url": "",
  "color": 1284672,
    "timestamp": new Date(),
    "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Type : AVIS"
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": message.author.username + " a donné son avis : ",
      "value": message + "",
      "inline": false
    }
  ]
};
if (message.content.toLocaleLowerCase() == "/avis"){
if(message.author.bot) return;
message.reply("Merci d'avoir donné ton avis ! ");
message.delete()
client.channels.get('415068910300430347').send({embed: avislogs})
}		
	
const suggestionlogs = {
  "url": "",
  "color": 2977512,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/383748539869691904/416275362129903637/DCSW.png",
    "text": "Type : SUGGESTION"
  },
  "thumbnail": {
    "url": message.author.displayAvatarURL
  },
  "fields": [
	{
      "name": message.author.username + " a fait part d'une nouvelle suggestion : ",
      "value": message + "",
      "inline": false
    }
  ]
};
 
if (message.content.toLocaleLowerCase() == "/suggestion"){
if(message.author.bot) return;
message.reply("Merci pour cette suggestion ! Ton idée sera examiné par le staff de DreamsCraft !");
message.delete()
client.channels.get('415550993267163156').send({embed: suggestionlogs})
}
	
  const mcdreams = {
  "url": "http://mcdreams.livehost.fr/index.php",
  "color": 4420817,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/347050495392874507/415841617963122700/540677fdea010b286fc35175074dd35b.png",
    "text": "Nous remercions McDreams de nous faire confiance !"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/347050495392874507/415841617963122700/540677fdea010b286fc35175074dd35b.png"
  },
  "image": {
      "url": "https://cdn.discordapp.com/attachments/322470437722521600/399179491726983179/2018-01-06_13.34.58.png"
    },
  "author": {
    "name": "McDreams :",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/attachments/347050495392874507/415841617963122700/540677fdea010b286fc35175074dd35b.png"
  },
  "fields": [
    {
      "name": "Nom : McDreams.",
      "value": "--------------------",
      "inline": true
    },
    {
      "name": "Reproduction : DisneyLandParis.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Directeurs : Dremas92 & TheSkinter.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "État : Fermée.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip / Version : McDreams.boxtoplay.com en 1.12. ( Une version premium est nécéssaire.)",
      "value": "--------------------",
      "inline": false
    },
	{
      "name": "Facebook :  https://www.facebook.com/McDreamsOfficiel/ ",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Discord : https://discord.gg/Se4k9Pw",
      "value": "--------------------",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/mcdreams")){
 message.channel.send({embed: mcdreams});
 }	
	
  const disneyworldparks = {
  "url": "https://disneyworldparks.net/",
  "color": 1,
  "footer": {
    "icon_url": "https://disneyworldparksdotcom.files.wordpress.com/2017/03/logo3.png",
    "text": "Nous remercions DisneyWorldParks de nous faire confiance !"
  },
  "thumbnail": {
    "url": "https://disneyworldparksdotcom.files.wordpress.com/2017/03/logo3.png"
  },
  "image": {
      "url": "https://disneyworldparksdotcom.files.wordpress.com/2017/07/cropped-2017-07-18_17-41-57.png"
    },
  "author": {
    "name": "DisneyWorldParks :",
    "url": "https://disneyworldparks.net/",
    "icon_url": "https://disneyworldparksdotcom.files.wordpress.com/2017/03/logo3.png"
  },
  "fields": [
    {
      "name": "Nom : DisneyWorldParks.",
      "value": "--------------------",
      "inline": true
    },
    {
      "name": "Reproduction : Tout les parcs Disney.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Directeurs : Xzender & Italix_54.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "État : Fermée.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip / Version : Non disponible.",
      "value": "--------------------",
      "inline": false
    },
	{
      "name": "Twitter : https://twitter.com/Minecraft_DWP",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Discord : Non disponible.",
      "value": "--------------------",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/disneyworldparks")){
 message.channel.send({embed: disneyworldparks});
 }
	
	const universparks = {
  "url": " ",
  "color": 10030606,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/333644419171614722/417278197864857602/LOGO_Univers_Parks_1.1_transparent.png",
    "text": "Nous remercions UniversParks de nous faire confiance !"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/333644419171614722/417278197864857602/LOGO_Univers_Parks_1.1_transparent.png"
  },
  "image": {
      "url": "https://cdn.discordapp.com/attachments/366587401528803330/417291573215363073/Sans_titre.png"
    },
  "author": {
    "name": "UniversParks :",
    "url": "",
    "icon_url": "https://cdn.discordapp.com/attachments/333644419171614722/417278197864857602/LOGO_Univers_Parks_1.1_transparent.png"
  },
  "fields": [
    {
      "name": "Nom : UniversParks.",
      "value": "--------------------",
      "inline": true
    },
    {
      "name": "Reproduction : Parc custom et reproduction de parc réel. ",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Fondateurs : McMagical_ (Theooo_) & waterpoloman.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "État : Ouvert.",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Ip / Version : UniversParks.boxtoplay.com en 1.12 ( Une version premium est nécéssaire )",
      "value": "--------------------",
      "inline": false
    },
	{
      "name": "Facebook : https://fr-fr.facebook.com/UniversParks/",
      "value": "--------------------",
      "inline": false
    },
	  {
      "name": "Twitter : https://twitter.com/UniversParks",
      "value": "--------------------",
      "inline": false
    },
    {
      "name": "Discord : https://discord.gg/mbT6QzG",
      "value": "--------------------",
      "inline": false
    }
  ]
};
if(message.content.toLocaleLowerCase() == ("/universparks")){
 message.channel.send({embed: universparks});
 }
});
