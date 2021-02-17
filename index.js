const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const Discord = require('discord.js');
const Puissance4 = require('./Puissance4');
const Pendu = require('./Pendu');

const bot = new Discord.Client;

const puissance4 = new Puissance4(bot);
const pendu = new Pendu(bot);

// Lancer aléatoire
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// Statue du bot
bot.on("ready", async () => {
    bot.user.setStatus("online");
    bot.user.setActivity("la plèbe", {type: 'WATCHING'});
})

// Blague "hin" "deux" "trois" "soleil"
var blague_123soleil = 1;
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
    if (message.content.toLowerCase() === '!puissance4') {
        puissance4.newGame(message);
    }
    else if (message.content.toLowerCase() === '!pendu') {
        pendu.newGame(message);
    }
    else if (message.content.toLowerCase() === '!help') {
        const embed = new Discord.MessageEmbed()
            .setColor('#fc2eff')
            .setTitle('Help - Commandes')
            .setDescription("Pour le moment je ne sais faire que 2 choses (parce que jojo se touche les couilles au lieu de m'ajouter des fonctionnalités)\n"
                            +"\n**!puissance4** - Normalement tu sais lire mais au cas où t'ai un QI inférieur à 10, cette commande permet de lancer une partie de Puissance 4"
                            +"\n**!pendu** - Si t’es vraiment con ou conne (pas de sexisme ici) il s'agit du jeu du pendu, le truc ou il faut deviner un mot sinon il y a un Jean-Michel qui meurt\n#RIPJeanMichel"
                            )
            .setTimestamp();
        message.channel.send(embed);
    }
});

bot.login(process.env.TOKEN);

console.log("Le bot est allumé");
