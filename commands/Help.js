const Discord = require('discord.js');

const {MessageEmbed} = require('discord.js');
const {Menu} = require('discord.js-menu');

var prefix = '<';
var pageMax = 3;

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
                .setTitle('Help - MAJ le 23/06/2021')
                .setDescription("Vous pouvez naviguez de page en page avec les réactions ci-dessous")
                .addField("News", "• Ajout de la commande **" + prefix + "anniv `JJ/MM/AAAA`** - (08/06/2021)"
                            +"\n• Ajout de la commande **" + prefix + "avatar `@quelqu'un`** - (04/06/2021)"
                            +"\n• Modification du menu **" + prefix + "help** (Il est maintenant possible de naviguer entre les différentes catégories) - (04/06/2021)"
                            +"\n• Ajout de 2 niveaux de difficulté (*Niveau #* et *Niveau ##*) pour le jeu **" + prefix + "fast** - (04/06/2021)"
                            +"\n• Modification visuel mineur du jeu **" + prefix + "fast** - (04/06/2021)"
                            +"\n• Modification visuel mineur du jeu **" + prefix + "pendu** - (04/06/2021)"
                            , false)
                .setFooter('Page 1/' + pageMax),
                reactions: {
                    "▶️": "next",
                }
            },
            {
                content: new MessageEmbed()
                .setColor('#fc2eff')
                .setTitle('Help - Commandes')
                .setDescription("Vous pouvez naviguez de page en page avec les réactions ci-dessous")
                .addField("Jeux","**" + prefix + "fast `niveau`** - C'est un jeu où vous devez retaper la chaîne de caractères choisie par mes soins le plus rapidement possible"
                                +"\n*• Niveau **1*** : 15 lettres minuscules"
                                +"\n*• Niveau **2*** : 15 lettres minuscules ou majuscules"
                                +"\n*• Niveau **3*** : 15 lettres minuscules (avec ou sans accent), majuscules ou caractères numériques"
                                +"\n*• Niveau **4*** : 15 lettres minuscules (avec ou sans accent), majuscules, caractères numériques ou spéciaux"
                                +"\n*• Niveau **5*** : 25 lettres minuscules (avec ou sans accent), majuscules, caractères numériques ou spéciaux"
                                +"\n*• Niveau **#*** : Si t'es vraiment chaud"
                                +"\n*• Niveau **##*** : Si t'es vraiment BEAUCOUP trop chaud"
                            +"\n**" + prefix + "pendu** - Si t’es vraiment con où conne (pas de sexisme ici) il s'agit du jeu du pendu, le truc où il faut deviner un mot sinon il y a un Jean-Michel qui meurt\n#RIPJeanMichel"
                            +"\n**" + prefix + "puissance4** - Normalement tu sais lire mais au cas où t'ai un QI inférieur à 10, cette commande permet de lancer une partie de Puissance 4"
                            , false)
                .setFooter('Page 2/' + pageMax),
                reactions: {
                    "◀️": "previous",
                    "▶️": "next",
                }
            },
            {
                content: new MessageEmbed()
                .setColor('#fc2eff')
                .setTitle('Help - Commandes')
                .setDescription("Vous pouvez naviguez de page en page avec les réactions ci-dessous")
                .addField("Tout savoir sur...", "**" + prefix + "bot** - Tout savoir sur le bot génial que je suis"
                                +"\n**" + prefix + "jojo** - Tout savoir sur sur notre magnifique Jojo"
                                +"\n**" + prefix + "paudrey** - Tout savoir sur notre magnifique Paudrey"
                                , false)
                .addField("Utile", "**" + prefix + "anniv `JJ/MM/AAAA`** - Je note ta date de naissance pour pouvoir te rappeler que tu auras vieilli le moment venu ^^"
                                +"\n**" + prefix + "avatar `@quelqu'un`** - Je t'envois ta photo de profil (ou celle de l'utilisateur mentionné)"
                                +"\n**" + prefix + "roll `nombre`** - Je choisis une valeur entre 0 et le nombre que tu as indiqué"
                                , false)
                .setFooter('Page 3/' + pageMax),
                reactions: {
                    "◀️": "previous",
                }
                
            },
        ], 300000)
        menu.start();
    }
}

module.exports = Help;
