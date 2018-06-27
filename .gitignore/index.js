const discord = require('discord.js');
client = new discord.Client();
const token = ("NDAzOTMxMDU2ODExNTQwNDkw.Dfbfdw.ojgq8Osk8fUGv005P_DWjuJQJI0");
var prefix = "/"; 

client.on("ready", () => {

	client.user.setPresence({ game: { name: ' /help ', type: 0}}); // Jeux au quel il joue
	console.log('|Le bot est en ligne.|'); // Message sur le console indiquant qu'il est prêt à l'utilisation

const onBot = {
  "title": "BOT EN LIGNE",
  "url": "",
  "color": 1697049,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": ""
  },
  "thumbnail": {
    "url": ""
  },
};

	client.channels.get('424338436560781313').send({embed: onBot})
	
});

client.login(token)


client.on('guildMemberAdd', member => {

	let role = member.guild.roles.find("name","--=[Visiteur]=--");
const channel = member.guild.channels.find("name", "accueil").send(`Bonjour et bienvenue sur le discord de DreamsCraft ${member.user}.`)
	member.addRole(role)
	
});


client.on('guildMemberAdd', member => {

const channel = member.guild.channels.find("name", "reglement");
	channel.send(`${member.user}`)
    .then(message =>  message.delete())
	
});


client.on('guildMemberRemove', member => {

const channel = member.guild.channels.find('name', 'accueil').send(` ${member.user} a quitté le discord de DreamsCraft.`);

});


client.on('message', message =>{

const help = {
  "url": " ",
  "color": 1073142,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Pour toute autres demande, le staff de DreamsCraft se tient à votre disposition."
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Voici toutes mes commandes utilisables sur le discord de DreamsCraft : ',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
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
		
	if (message.content.toLocaleLowerCase() === `/help`) {
	if (message.channel.type == 'dm') return;
	message.author.send({embed: help});
    message.channel.send(`Mes commandes utilisables sur ce discord vous ont été envoyé en privé. ${message.author}`)
    .then(sentMessage => sentMessage.delete(150000))
    .catch(error => {
    });
}
	

const helpstaff = {
  "url": " ",
  "color": 1073142,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
    "text": "Pour toute autres demande, Natthh se tient à votre disposition."
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "author": {
    "name": 'Commande uniquement réservé aux staffs :',
    "url": " ",
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png"
  },
  "fields": [
    {
      "name": "``[MAINTENANCE] /clear (nombre)``",
      "value": "``Efface le nombre de message indiqué dans la commande.``",
      "inline": false
    },
    {
      "name": "``/annonce (message)``",
      "value": "``Permet de faire parler le bot. ( Permission ADMIN obligatoire )``",
      "inline": false
    },
    {
      "name": "``/mute (membre) (raison) ``",
      "value": "``Permet de muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``/unmute (membre) (raison) ``",
      "value": "``Permet de dé-muter quelqu'un.``",
      "inline": false
    },
    {
      "name": "``/kick (membre) (raison) ``",
      "value": "``Permet de kick un membre du discord.``",
      "inline": false
    },
	{
      "name": "``/ban (membre) (raison)``",
      "value": "``Permet de ban un membre du discord.``",
      "inline": false
    }
  ]
};

	if (message.content.toLocaleLowerCase() === `/helpstaff`) {
	if (message.channel.type == 'dm') return;
	if (!message.member.hasPermission('MANAGE_MESSAGES'))
	message.author.send({embed: helpstaff});
    message.channel.send(`Mes commandes spéciales staff utilisables sur ce discord vous ont été envoyé en privé. ${message.author}`)
    .then(sentMessage => sentMessage.delete(150000))
    .catch(error => {
    });
}

	if(message.content.toLocaleLowerCase() == ("/partenaires")){
	 if (message.channel.type == 'dm') return;
	 message.author.send("Voici la liste des serveurs partenaires de DreamsCraft : UniversParks  - McDreams - DreamsWorld ! Pour plus d'information sur un serveur en question, utilisez /(Nom du partenaire) !");
     message.channel.send(`Les informations sur les partenaires de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}

	if(message.content.toLocaleLowerCase() == ("/dc")){
	 if (message.channel.type == 'dm') return;
	 message.author.send("L'ip de DreamsCraft est : DreamsCraft.minecraft-mania.fr en version 1.12.2 de minecraft premium !");
	 message.channel.send(`Les informations concernant DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });

	}
	
	 if(message.content.toLocaleLowerCase() == ("/soft")){
	 if (message.channel.type == 'dm') return;
	 message.author.send("Il n'y a pas de date pour la prochaine Soft-Opening.");
	 message.channel.send(`Les informations concernant la prochaine soft-opening de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}
	
	if(message.content.toLocaleLowerCase() == ("/ouverture")){
	 if (message.channel.type == 'dm') return;
	 message.author.send("Il n'y a pas encore de date d'ouverture.");
	 message.channel.send(`Les informations concernant l'ouverture DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}
	
	if(message.content.toLocaleLowerCase() == ("/spectacles")){
	 if (message.channel.type == 'dm') return;
	 message.author.send('Les horaires des prochains spectacles ne sont pas encore programmé.');
	 message.channel.send(`Les informations concernant les spectacles de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
     .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}

	if(message.content.toLocaleLowerCase() == ("/attractions")){
	 if (message.channel.type == 'dm') return;
	 message.author.send("Les attractions ouvertes sont : ``Les Tapis Volants d'Aladin`` - `` Rc Racer`` - `` Zig-Zag Spin `` - ``Crush Coaster`` - `` Toy Soldiers Parachute Drop `` !");
	 message.channel.send(`Les informations concernant les attractions de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	}

	

	if(message.content.toLocaleLowerCase() == ("/sortie")){
	 if (message.channel.type == 'dm') return;
	 message.author.send("La prochaine sortie à DisneyLand Paris organisé par Loulouemerick se déroule le 14 juin ! Vous voulez participer ? Contactez Loulouemerick par MP ! Participants actuels : Loulouemerick.");
	 message.channel.send(`Les informations concernant les attractions de DreamsCraft vous ont été envoyé en privé. ${message.author}`)
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });

}	
	
// Tri des insultes automatique 
	
const insultelogs = {
  "url": "",
  "color": 10030606,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
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
	if (message.channel.type == 'dm') return;
	if(message.author.bot) return;
	message.channel.send(`Merci d'éviter ce genre de langage ! ${message.author}`);
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
	message.delete()
	client.channels.get('411217787785183245').send({embed: insultelogs})
}	

	
// Archive des messages

const messagelogs = {
  "url": "",
  "color": 15853885,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
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
	if (message.channel.type == 'dm') return;
	if(message.author.bot) return;
	client.channels.get('414418438614941698').send({embed: messagelogs})
}				

	
// Filtre Anti-Pub	
	
const publogs = {
  "url": "",
  "color": 10030606,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
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
if (message.channel.type == 'dm') return;
if(message.author.bot) return;
message.channel.send("Merci d'éviter la pub ! ");
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
message.delete()
client.channels.get('411217787785183245').send({embed: publogs})
}		
	
	
// Archive avis

const avislogs = {
  "url": "",
  "color": 1284672,
    "timestamp": new Date(),
    "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
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
	
if (message.content.toLocaleLowerCase().includes("/avis")) {
if (message.channel.type == 'dm') return;
if(message.author.bot) return;
message.channel.send("Merci d'avoir donné ton avis ! ");
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
message.delete()
client.channels.get('415068910300430347').send({embed: avislogs})
}		
	
	
// Archive suggestions	
	
const suggestionlogs = {
  "url": "",
  "color": 2977512,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/423566417242095638/426742650935312385/test.png",
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
 
if (message.content.toLocaleLowerCase().includes("/suggestion")) {
if (message.channel.type == 'dm') return;
if(message.author.bot) return;
message.channel.send("Merci pour cette suggestion ! Ton idée sera examiné par le staff de DreamsCraft !");
	 .then(sentMessage => sentMessage.delete(150000))
     .catch(error => {
     });
message.delete()
client.channels.get('415550993267163156').send({embed: suggestionlogs})
}

});
