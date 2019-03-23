const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";
const token = "ICI LE TOKEN" ;


bot.on("ready", () => {
	console.log("la connection aux serveur discord est ok");
});

bot.on('ready', () => {
  bot.user.setGame('typing !help');
});




bot.on('message', msg => {

if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '!spotify') { //commande a exécuté
    if (msg.channel.name === "gen-1"){ //obligatoirement dans un salon qui se nome générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !

          'email.mail@gmail.fr:MotDePasse',
            'email.mail@gmail.fr:MotDePasse',
              'email.mail@gmail.fr:MotDePasse',
                'email.mail@gmail.fr:MotDePasse',
                  'email.mail@gmail.fr:MotDePasse',
                    'email.mail@gmail.fr:MotDePasse'        //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Lσw")
  .addField('Voici ton compte spotify: ',
  randomAnswerPicker)
 .setColor("RANDOM")
      .setImage("https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422" )
      .setTimestamp()
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}

if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '!crunchyroll') { //commande a exécuté
    if (msg.channel.name === "gen-1"){ //obligatoirement dans un salon qui se nom générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !

          'email.mail@gmail.fr:MotDePasse',
            'email.mail@gmail.fr:MotDePasse',
              'email.mail@gmail.fr:MotDePasse',
                'email.mail@gmail.fr:MotDePasse',
                  'email.mail@gmail.fr:MotDePasse',
                    'email.mail@gmail.fr:MotDePasse'        //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Lσw")
  .addField('Voici ton compte CrunchyRoll: ',
  randomAnswerPicker)
 .setColor("RANDOM")
      .setImage("https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422" )
      .setTimestamp()
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}

if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '!fortnite') { //commande a exécuté
    if (msg.channel.name === "gen-2"){ //obligatoirement dans un salon qui se nom générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !

          'email.mail@gmail.fr:MotDePasse',
            'email.mail@gmail.fr:MotDePasse',
              'email.mail@gmail.fr:MotDePasse',
                'email.mail@gmail.fr:MotDePasse',
                  'email.mail@gmail.fr:MotDePasse',
                    'email.mail@gmail.fr:MotDePasse'        //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Lσw")
  .addField('Voici ton compte fortnite: ',
  randomAnswerPicker)
 .setColor("RANDOM")
      .setImage("https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422" )
      .setTimestamp()
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}

if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '!netflix') { //commande a exécuté
    if (msg.channel.name === "gen-2"){ //obligatoirement dans un salon qui se nom générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !

          'email.mail@gmail.fr:MotDePasse',
            'email.mail@gmail.fr:MotDePasse',
              'email.mail@gmail.fr:MotDePasse',
                'email.mail@gmail.fr:MotDePasse',
                  'email.mail@gmail.fr:MotDePasse',
                    'email.mail@gmail.fr:MotDePasse'        //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Lσw")
  .addField('Voici ton compte netflix ',
  randomAnswerPicker)
 .setColor("RANDOM")
      .setImage("https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422" )
      .setTimestamp()
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}


});


bot.on('message', message => {
		
      if(message.content === "!help"){
        const embed = new Discord.RichEmbed()

        .setAuthor("Liste des commandes du GU Bot")
        .setColor("RANDOM")
        .setFooter("Copyright © 2019 Lσw")
        .setImage("https://images-ext-2.discordapp.net/external/W1k5lN4PisAhu0aZy5UAubEdeyX0MOx3zk-340OI1zU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/529711164066889779/9863530505fad7c4dead8af04d8e0c39.jpg?width=270&height=270")
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .addField("!spotify",
          "te génère un compte spotify premium.")
        .addField("PREMIUM", ".")
        .addField("!fortnite",
        "te génère un compte fortnite.")
        .addField("!credit",
         "**Ouvre les crédits et les participants pour la création du bot**")
        .addField("!help",
          "Permet d'avoir la liste des commandes disponibles" )
        message.channel.send({embed});
      }      
		
		     if (message.content === '!crédit') {
      	const embed = new Discord.RichEmbed()
      .setThumbnail(bot.user.avatarURL)
    .setFooter("Copyright © 2019 Lσw")
  .setTitle(`Crédit et remerciment`)
 .addField('Crédit',
 `**Bot cree par @Lσw' ✓#5050 via l'application discord.**`)
 .addField('Demande',
 '**bot pour IsMeatz **',)
     .setColor("#00a3cc")
       .setImage("https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422" )
      .setTimestamp()
    message.channel.send({embed});
    
		}
		
});


bot.on('message',function(message){
	if(message.content.includes('deco')){ //il suffit d'exécuter PREFIX + deco pour déconnecter le bot
		  message.channel.send('je me suis déconnecté avec succès')
		message.delete().then(bot.destroy())
}
	})

bot.login(token);