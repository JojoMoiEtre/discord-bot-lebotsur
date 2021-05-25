const Discord = require('discord.js');

const {MessageEmbed} = require('discord.js');
const {Menu} = require('discord.js-menu');

var prefix = '<';

class Help {
    constructor() {
        this.messageEmbed = null;
    }

    execute(message) {
        let menu = new Menu(message.channel, message.author.id, [
            {
                name: "Help",
                content: new MessageEmbed()
                .setColor('#fc2eff')
                .setTitle('Help - Commandes')   //JEUX
                .setDescription("Vous pouvez naviguez de page en page avec les réactions ci-dessous")
                .addField("Jeux","**" + prefix + "fast `niveau`** - C'est un jeu où vous devez retaper la chaîne de caractères choisie par mes soins le plus rapidement possible"
                                +"\n*• Niveau **1*** : 15 lettres minuscules"
                                +"\n*• Niveau **2*** : 15 lettres minuscules ou majuscules"
                                +"\n*• Niveau **3*** : 15 lettres minuscules (avec ou sans accent), majuscules ou caractères numériques"
                                +"\n*• Niveau **4*** : 15 lettres minuscules (avec ou sans accent), majuscules, caractères numériques ou spéciaux"
                                +"\n*• Niveau **5*** : 25 lettres minuscules (avec ou sans accent), majuscules, caractères numériques ou spéciaux"
                                +"\n*• Niveau **#*** : Si t'es vraiment chaud"
                                +"\n*• Niveau **##*** : Si t'es vraiment BEAUCOUP trop chaud"
                            +"\n**" + prefix + "pendu** - Si t’es vraiment con ou conne (pas de sexisme ici) il s'agit du jeu du pendu, le truc où il faut deviner un mot sinon il y a un Jean-Michel qui meurt\n#RIPJeanMichel"
                            +"\n**" + prefix + "puissance4** - Normalement tu sais lire mais au cas où t'ai un QI inférieur à 10, cette commande permet de lancer une partie de Puissance 4"
                            , false)
                .setFooter('Page 1/2'),
                reactions: {
                    "▶️": "next",
                }
            },
            {
                content: new MessageEmbed()
                .setColor('#fc2eff')
                .setTitle('Help - Commandes')   //TOUT SAVOIR SUR... - UTILITAIRE
                .setDescription("Vous pouvez naviguez de page en page avec les réactions ci-dessous")
                .addField("Tout savoir sur...", "**" + prefix + "bot** - Tout savoir sur le bot génial que je suis"
                                +"\n**" + prefix + "jojo** - Tout savoir sur sur notre magnifique Jojo"
                                +"\n**" + prefix + "paudrey** - Tout savoir sur notre magnifique Paudrey"
                                , false)
                .addField("Utilitaire", "**" + prefix + "avatar `@quelqu'un`** - Je t'envois ta photo de profil (ou celle de l'utilisateur mentionné)"
                                +"\n**" + prefix + "roll `nombre`** - Je choisis une valeur entre 0 et le nombre que tu as indiqué"
                                , false)
                .setFooter('Page 2/2'),
                reactions: {
                    "◀️": "previous",
                }
                
            },
        ], 300000)
        menu.start();
    }
}

module.exports = Help;
