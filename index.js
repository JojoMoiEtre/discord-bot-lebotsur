const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const Discord = require('discord.js');
const Puissance4 = require('./commands/Puissance4');
const Pendu = require('./commands/Pendu');
const Fast = require('./commands/Fast');
const Help = require('./commands/Help');
const Avatar = require('./commands/Avatar');

const bot = new Discord.Client();
const puissance4 = new Puissance4(bot);
const pendu = new Pendu(bot);
const fast = new Fast(bot);
const help = new Help(bot);
const avatar = new Avatar(bot);

var prefix = '<';
var blague_123soleil = false;

let dm = [
    "Désolé je ne réponds pas aux MP :heart:",
    "Me parle pas stp, je tryhard adibou là",
    "D'où tu me cause ? T'as vraiment cru que j’allais parler à des gens de ta catégorie sociale ? Je fais partie de la haute société moi, je ne parle pas à la plèbe",
    "J’ai pas envie de te parler en fait…"
]

let possible_ah = [
    "ah", "Ah", "aH", "AH", "ah !", "ah ?", "Ah !", "Ah ?", "aH !", "aH ?", "AH !", "AH ?", 
    "ha", "Ha", "hA", "HA", "ha !", "ha ?", "Ha !", "Ha ?", "hA !", "hA ?", "HA !", "HA ?"
];

let possible_oui = [
    "oui", "Oui", "OUI", "ui", "Ui", "UI", "oui !", "Oui !", "OUI !", "ui !", "Ui !", "UI !",
    "oui ?", "Oui ?", "OUI ?", "ui ?", "Ui ?", "UI ?", "oui...", "Oui...", "OUI...", "ui...", "Ui...", "UI...",
    "oui -_-", "Oui -_-", "OUI -_-", "ui -_-", "Ui -_-", "UI -_-"
];

let possible_hin = [
    "hin", "Hin", "HIN", "hein", "Hein", "HEIN",
    "hin !", "Hin !", "HIN !", "hein !", "Hein !", "HEIN !",
    "hin ?", "Hin ?", "HIN ?", "hein ?", "Hein ?", "HEIN ?"
];

let possible_trois = [
    "trois", "Trois", "TROIS", "troi", "Troi", "TROI", "3",
    "trois !", "Trois !", "TROIS !", "troi !", "Troi !", "TROI !", "3 !",
    "trois ?", "Trois ?", "TROIS ?", "troi ?", "Troi ?", "TROI ?", "3 ?",
];

// getRandomInt
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// Statue du bot
bot.on("ready", async () => {
    bot.user.setStatus("online");
    bot.user.setActivity("la plèbe (" + prefix + "help)", {type: 'WATCHING'});
})

bot.on("message", async message => {

    if (message.author.bot) {
        return;
    };

    // Blague "ah" "tchoum"
    if(possible_ah.indexOf(message.content.toLowerCase()) !== -1) {
        if(getRandomInt(10) === 2) {
            message.channel.send(`Tchoum`);
        }
    };
    
    // Blague "oui" "stisti"
    if(possible_oui.indexOf(message.content.toLowerCase()) !== -1) {
        if(getRandomInt(10) === 2) {
            message.channel.send(`Stiti`);
        }
    };

    // Blague "hin" "deux" "trois" "soleil"
    if(possible_hin.indexOf(message.content.toLowerCase()) !== -1) {
        if(getRandomInt(10) === 2) {
            message.channel.send(`Deux`);
            blague_123soleil = true;
        }
    }
    else if((possible_trois.indexOf(message.content.toLowerCase()) !== -1) && (blague_123soleil === true)) {
        message.channel.send(`Soleil`);
        setTimeout(() => {
            message.channel.send(`🤡`);
        }, 1000);
        blague_123soleil = false;
    }
    else {
        blague_123soleil = false;
    };

    // Puissance4
    if (message.content.toLowerCase() === prefix + 'puissance4') {
        puissance4.newGame(message);
    }
    // Pendu
    else if (message.content.toLowerCase() === prefix + 'pendu') {
        pendu.newGame(message);
    }
    // Fast
    else if (message.content.startsWith(`${prefix}fast`)) {
        const niv = message.content.substring(`${prefix}fast `.length)
        if (niv === '1') {
            fast.newGame(message, niv);
        }
        else if (niv === '2') {
            fast.newGame(message, niv);
        }
        else if (niv === '3') {
            fast.newGame(message, niv);
        }
        else if (niv === '4') {
            fast.newGame(message, niv);
        }
        else if (niv === '5') {
            fast.newGame(message, niv);
        }
        else if (niv === '#') {
            fast.newGame(message, niv);
        }
        else if (niv === '##') {
            fast.newGame(message, niv);
        }
    }
    // Help
    else if (message.content.toLowerCase() === prefix + 'help') {
        help.execute(message);
    };

    // <avatar
    if (message.content.toLowerCase() === `${prefix}avatar`) {
        avatar.run(message, message.author);
        return;
    }
    else if (message.content.startsWith(`${prefix}avatar `)) {
        const member = message.mentions.users.first() || message.author
        if (member !== message.author) {
            avatar.run(message, message.mentions.users.first())
            return;
        }
        message.channel.send("Vous devez mentionner une personne existante pour obtenir son avatar...");
    };

    // <paudrey
    if (message.content.toLowerCase() === prefix + 'paudrey') {
        var id = '366298754866872331';
        const user = bot.users.cache.get(id);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Profil - " + user.username)
            .setDescription("Tout savoir sur notre magnifique Paudrey")
            .addField("Nom", user.username, true)
            .addField("SOUS-nom", "Paudrey", true)
            .addField("Description", "Paudrey est le dictateur de ce serveur de merde. Pourquoi je dis ça ? Parce que monsieur abuse de ses pouvoirs (il mute les gens sans aucune raison juste pour faire chier son monde). Bon après je dit “dictateur” mais en réalité il se fait bully h24 par tout le monde…\nIl a deux objectifs dans la vie : casser les couilles et trouver la motivation (qu’il cherche depuis plusieurs années maintenant)", false)
            .setThumbnail(user.avatarURL(id))
            .setTimestamp();
        message.channel.send(embed);
    };

    // <bot
    if (message.content.toLowerCase() === prefix + 'bot') {
        var id = '716339634296062002';
        const user = bot.users.cache.get(id);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Profil - " + user.username)
            .setDescription("Tout savoir sur le bot génial que je suis")
            .addField("Nom", user.username, true)
            .addField("Surnom", "Le meilleur des bots", true)
            .addField("Description", "Je suis le magnifique bot créé par un être oubliable.\nPoli, intelligent et sage je saurais repondre à toutes vos demandes les plus folles (enfin si Jojo fini de me coder, parce qu'en ce moment il en branle pas une ce fils de p*te 😡)", false)
            .setThumbnail(user.avatarURL(id))
            .setTimestamp();
        message.channel.send(embed);
    };

    // <jojo
    if (message.content.toLowerCase() === prefix + 'jojo') {
        var id = '321029072606068736';
        const user = bot.users.cache.get(id);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Profil - " + user.username)
            .setDescription("Tout savoir sur ce ~~BG~~ déchet")
            .addField("Nom", user.username, true)
            .addField("SOUS-nom", "Déchet vivant (même pas recyclable)", true)
            .addField("Description", "Il est l'intelligence et la beaugossitude incarné...\nNon MDR j’déconne ! T'as cru que j’allais complimenter ce chien de la casse ? Ce gars c’est le plus gros flemmard de tous les temps, il passe toutes ces putains de journées à se toucher les couilles devant son PC. En plus t’a vu sa tronche ? Impossible de pécho avec une gueule pareille !", false)
            .setThumbnail(user.avatarURL(id))
            .setTimestamp();
        message.channel.send(embed);
    };

    // Roll
    if (message.content.startsWith(`${prefix}roll `)) {
        const roll = message.content.substring(`${prefix}roll `.length)
        var valroll = getRandomInt(Number(roll)) + 1
        const embed = new Discord.MessageEmbed()
            .setColor('#278C37')
            .setTitle("Roll")
            .setDescription("Je choisis le numéro **" + valroll + "**")
            .setTimestamp();
        message.channel.send(embed);
    };

    // Reponse MP
    if(message.channel.type === 'dm') {
        let index = Math.floor(Math.random() * (dm.length))
        message.channel.send(dm[index])
    };
});

bot.login(process.env.TOKEN);

console.log("Le bot est allumé");
