// Début du code
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; // Préfix du bot


// Pemière action du bot quand il s'allume 
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

// Command HELP
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
    "name": 'Toutes mes commandes commencent par " / " : ',
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
}
  	if (message.content === `/help`) {
	if (message.channel.type == 'dm') return;
	message.author.send({embed: help});
    message.delete()
    message.channel.send(`Mes commandes utilisables sur ce discord vous ont été envoyé en privé. ${message.author}`)
    .then(sentMessage => sentMessage.delete(10000))
    .catch(error => {
    });
	}
});


