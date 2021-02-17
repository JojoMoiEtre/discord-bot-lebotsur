const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const Discord = require('discord.js');
const token = require("./token.json");
const Puissance4 = require('./Puissance4');
const Pendu = require('./Pendu');

const bot = new Discord.Client();
const puissance4 = new Puissance4(bot);
const pendu = new Pendu(bot);

var prefix = '<';
var blague_123soleil = 1;

// Lancer aléatoire
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// Statue du bot
bot.on("ready", async () => {
    bot.user.setStatus("online");
    bot.user.setActivity("la plèbe " + prefix + "help", {type: 'WATCHING'});
})

// Blague "hin" "deux" "trois" "soleil"
bot.on("message", async message => {
    if(getRandomInt(3) === 1){
        if(message.content.includes("hein") || message.content.includes("Hein") || message.content.includes("HEIN") || message.content.includes("hin") || message.content.includes("Hin") || message.content.includes("HIN")){
            if(message.content.length < 5 || message.content.length < 8 && (message.content.endsWith("!") || message.content.endsWith("?"))){
                message.channel.send(`Deux`);
                blague_123soleil = 2;
            }
        }
    }
    if(blague_123soleil === 2){
        if(message.content.includes("trois") || message.content.includes("Trois") || message.content.includes("TROIS") || message.content.includes("3") || message.content.includes("troi") || message.content.includes("Troi") || message.content.includes("TROI")){
            if(((message.content.length < 6) && (message.content.length > 2)) || (message.content.length === 1)){
                message.channel.send(`Soleil`);
                setTimeout(() => {
                    message.channel.send(`<:Heureux:679246188532465673>`);
                }, 1000);
            }
            else {
                blague_123soleil = 1;
                return;
            }
        }
    }
})

// Blague "ah" "tchoum"
bot.on("message", async message => {
    if(getRandomInt(3) === 1){
        if(message.content.includes("ah") || message.content.includes("Ah") || message.content.includes("AH") || message.content.includes("ha") || message.content.includes("Ha") || message.content.includes("HA")){
            if(message.content.length < 3 || message.content.length < 5 && (message.content.endsWith("!") || message.content.endsWith("?"))){
                message.channel.send(`Tchoum`);
            }
        }
    }
})

// Blague "oui" "stisti"
bot.on("message", async message => {
    if(getRandomInt(3) === 1){
        if(message.content.includes("oui") || message.content.includes("Oui") || message.content.includes("OUI")){
            if(message.content.length < 4 || message.content.length < 6 && (message.content.endsWith("!") || message.content.endsWith("?"))){
                message.channel.send(`Stiti`);
            }
        }
    }
})

//Jeux
bot.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'puissance4') {
        puissance4.newGame(message);
    }
    else if (message.content.toLowerCase() === prefix + 'pendu') {
        pendu.newGame(message);
    }
    else if (message.content.toLowerCase() === prefix + 'help') {
        const embed = new Discord.MessageEmbed()
            .setColor('#fc2eff')
            .setTitle('Help - Commandes')
            .setDescription("Pour le moment je ne sais faire que 2 choses (parce que jojo se touche les couilles au lieu de m'ajouter des fonctionnalités)\n")
            .addField("Jeux", "**" + prefix + "puissance4** - Normalement tu sais lire mais au cas où t'ai un QI inférieur à 10, cette commande permet de lancer une partie de Puissance 4"
                            +"\n**" + prefix + "pendu** - Si t’es vraiment con ou conne (pas de sexisme ici) il s'agit du jeu du pendu, le truc ou il faut deviner un mot sinon il y a un Jean-Michel qui meurt\n#RIPJeanMichel"         
                            , false)
            .addField("Jeux", "**" + prefix + "paudrey** - Tout savoir sur notre magnifique Paudrey"
                            +"\n**" + prefix + "bot** - Tout savoir sur le bot génial que je suis"
                            +"\n**" + prefix + "lebg** - Tout savoir sur ce BG"
                            , false)               
            .setTimestamp();
        message.channel.send(embed);
    }
});

//<paudrey
bot.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'paudrey') {
        var id = '366298754866872331';
        const user = bot.users.cache.get(id);
        const embed = new Discord.MessageEmbed()
            .setColor('#275BF0')
            .setTitle("Profil - " + user.username)
            .setDescription("Tout savoir sur notre magnifique Paudrey")
            .addField("Nom", user.username, true)
            .addField("SOUS-nom", "Paudrey", true)
            .addField("Description", "Paudrey est le dictateur de ce serveur de merde. Pourquoi je dis ça ? Parce que monsieur abuse de ses pouvoirs (il mute les gens sans aucune raison juste pour faire chier son monde). Bon après je dit “dictateur” mais en réalité il se fait bully h24 par tout le monde…\nIl a deux objectifs dans la vie : casser les couilles et trouver la motivation (qu’il cherche depuis plusieurs années maintenant)", false)
            .setThumbnail(user.avatarURL(id))
            .setTimestamp();
        message.channel.send(embed);
    }
});

//<bot
bot.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'bot') {
        var id = '716339634296062002';
        const jojoid = bot.users.cache.get('321029072606068736');
        const user = bot.users.cache.get(id);
        const embed = new Discord.MessageEmbed()
            .setColor('#67C334')
            .setTitle("Profil - " + user.username)
            .setDescription("Tout savoir sur le bot génial que je suis")
            .addField("Nom", user.username, true)
            .addField("Surnom", "Le meilleur des bots", true)
            .addField("Description", "Je suis le magnifique bot créé par le grand **" + jojoid.username + "**.\nPoli, intelligent et sage je saurais repondre a toutes vos demandes les plus folles (enfin, si Jojo fni de me coder parce qu'en ce moment il en branle pas une ce fils de pute 😡)", false)
            .setThumbnail(user.avatarURL(id))
            .setTimestamp();
        message.channel.send(embed);
    }
});

//<lebg
bot.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'lebg') {
        var id = '321029072606068736';
        const user = bot.users.cache.get(id);
        const embed = new Discord.MessageEmbed()
            .setColor('#8124DA')
            .setTitle("Profil - " + user.username)
            .setDescription("Tout savoir sur ce BG")
            .addField("Nom", user.username, true)
            .addField("Surnom", "Déchet vivant (même pas recyclable)", true)
            .addField("Description", "Il est l'intelligence et la beau gossitude incarné...\nNon MDR j’déconne ! T’a cru que j’allais complimenter ce chien de la casse ? Ce gars c’est le plus gros flemmard de tous les temps, il passe toutes ces putains de journées à se toucher les couilles devant son PC. En plus t’a vu sa tronche ? Impossible de pécho avec une gueule pareille !", false)
            .setThumbnail(user.avatarURL(id))
            .setTimestamp();
        message.channel.send(embed);
    }
});

bot.login(token.token);

console.log("Le bot est allumé");