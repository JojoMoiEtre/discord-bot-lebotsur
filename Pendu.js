const Discord = require('discord.js');

const possible_words = ["ANGLE","ARMOIRE","BANC","BUREAU","CABINET","CARREAU","CHAISE","CLASSE","CLEF","COIN","COULOIR","DOSSIER","EAU","ECOLE","ENTRER","ESCALIER","ETAGERE","EXTERIEUR","FENETRE","INTERIEUR","LAVABO","LIT","MARCHE","MATELAS","MATERNELLE","MEUBLE","MOUSSE","MUR","PELUCHE","PLACARD","PLAFOND","PORTE","POUBELLE","RADIATEUR","RAMPE","RIDEAU","ROBINET","SALLE","SALON","SERVIETTE","SIEGE","SIESTE","SILENCE","SOL","SOMMEIL","SONNETTE","SORTIE","TABLE","TABLEAU","TABOURET","TAPIS","TIROIR","TOILETTE","VITRE","ALLER","AMENER","APPORTER","APPUYER","ATTENDRE","BAILLER","COUCHER","DORMIR","ECLAIRER","EMMENER","EMPORTER","ENTRER","FERMER","FRAPPER","INSTALLER","LEVER","OUVRIR","PRESSER","RECHAUFFER","RESTER","SONNER","SORTIR","VENIR","ABSENT","ASSIS","BAS","HAUT","PRESENT","GAUCHE","DROITE","DEBOUT","DEDANS","DEHORS","FACE","LOIN","PRES","TARD","TOT","APRES","AVANT","CONTRE","DANS","DE","DERRIERE","DEVANT","DU","SOUS","SUR","CRAYON","STYLO","FEUTRE","MINE","GOMME","DESSIN","COLORIAGE","RAYURE","PEINTURE","PINCEAU","COULEUR","CRAIE","PAPIER","FEUILLE","CAHIER","CARNET","CARTON","CISEAUX","DECOUPAGE","PLIAGE","PLI","COLLE","AFFAIRE","BOITE","CASIER","CAISSE","TROUSSE","CARTABLE","JEU","JOUET","PION","DOMINO","PUZZLE","CUBE","PERLE","CHOSE","FORME","CARRE","ROND","PATE","MODELER","TAMPON","LIVRE","HISTOIRE","BIBLIOTHEQUE","IMAGE","ALBUM","TITRE","CONTE","DICTIONNAIRE","MAGAZINE","CATALOGUE","PAGE","LIGNE","MOT","ENVELOPPE","ETIQUETTE","CARTE","APPEL","AFFICHE","ALPHABET","APPAREIL","CAMESCOPE","CASSETTE","CHAINE","CHANSON","CHIFFRE","CONTRAIRE","DIFFERENCE","DOIGT","ECRAN","ECRITURE","FILM","FOIS","FOI","IDEE","INSTRUMENT","INTRUS","LETTRE","LISTE","MAGNETOSCOPE","MAIN","MICRO","MODELE","MUSIQUE","NOM","NOMBRE","ORCHESTRE","ORDINATEUR","PHOTO","POINT","POSTER","POUCE","PRENOM","QUESTION","RADIO","SENS","TAMBOUR","TELECOMMANDE","TELEPHONE","TELEVISION","TRAIT","TROMPETTE","VOIX","XYLOPHONE","ZERO","CHANTER","CHERCHER","CHOISIR","CHUCHOTER","COLLER","COLORIER","COMMENCER","COMPARER","COMPTER","CONSTRUIRE","CONTINUER","COPIER","COUPER","DECHIRER","DECOLLER","DECORER","DECOUPER","DEMOLIR","DESSINER","DIRE","DISCUTER","ECOUTER","ECRIRE","EFFACER","ENTENDRE","ENTOURER","ENVOYER","FAIRE","FINIR","FOUILLER","GOUTER","IMITER","LAISSER","LIRE","METTRE","MONTRER","OUVRIR","PARLER","PEINDRE","PLIER","POSER","PRENDRE","PREPARER","RANGER","RECITER","RECOMMENCER","REGARDER","REMETTRE","REPETER","REPONDRE","SENTIR","SOULIGNER","TAILLER","TENIR","TERMINER","TOUCHER","TRAVAILLER","TRIER","AMI","ATTENTION","CAMARADE","COLERE","COPAIN","COQUIN","DAME","DIRECTEUR","DIRECTRICE","DROIT","EFFORT","ELEVE","ENFANT","FATIGUE","FAUTE","FILLE","GARCON","GARDIEN","MADAME","MAITRE","MAITRESSE","MENSONGE","ORDRE","PERSONNE","RETARD","JOUEUR","SOURIRE","TRAVAIL","AIDER","DEFENDRE","DESOBEIR","DISTRIBUER","ECHANGER","EXPLIQUER","GRONDER","OBEIR","OBLIGER","PARTAGER","PRETER","PRIVER","PROMETTRE","PROGRES","PROGRESSER","PUNIR","QUITTER","RACONTER","EXPLIQUER","REFUSER","SEPARER","BLOND","BRUN","CALME","CURIEUX","DIFFERENT","DOUX","ENERVER","GENTIL","GRAND","HANDICAPE","INSEPARABLE","JALOUX","MOYEN","MUET","NOIR","NOUVEAU","PETIT","POLI","PROPRE","ROUX","SAGE","SALE","SERIEUX","SOURD","TRANQUILLE","ARROSOIR","ASSIETTE","BALLE","BATEAU","BOITE","BOUCHON","BOUTEILLE","BULLES","CANARD","CASSEROLE","CUILLERE","CUVETTE","DOUCHE","ENTONNOIR","GOUTTES","LITRE","MOULIN","PLUIE","POISSON","PONT","POT","ROUE","SAC","PLASTIQUE","SALADIER","SEAU","TABLIER","TASSE","TROUS","VERRE","AGITER","AMUSER","ARROSER","ATTRAPER","AVANCER","BAIGNER","BARBOTER","BOUCHER","BOUGER","DEBORDER","DOUCHER","ECLABOUSSER","ESSUYER","ENVOYER","COULER","PARTIR","FLOTTER","GONFLER","INONDER","JOUER","LAVER","MELANGER","MOUILLER","NAGER","PLEUVOIR","PLONGER","POUSSER","POUVOIR","PRESSER","RECEVOIR","REMPLIR","RENVERSER","SECHER","SERRER","SOUFFLER","TIRER","TOURNER","TREMPER","VERSER","VIDER","VOULOIR","AMUSANT","CHAUD","FROID","HUMIDE","INTERESSANT","MOUILLE","SEC","TRANSPARENT","MOITIE","AUTANT","BEAUCOUP","ENCORE","MOINS","PEU","PLUS","TROP","ANORAK","ARC","BAGAGE","BAGUETTE","BARBE","BONNET","BOTTE","BOUTON","BRETELLE","CAGOULE","CASQUE","CASQUETTE","CEINTURE","CHAPEAU","CHAUSSETTE","CHAUSSON","CHAUSSURE","CHEMISE","CIGARETTE","COL","COLLANT","COURONNE","CRAVATE","CULOTTE","ECHARPE","EPEE","FEE","FLECHE","FUSIL","GANT","HABIT","JEAN","JUPE","LACET","LAINE","LINGE","LUNETTES","MAGICIEN","MAGIE","MAILLOT","MANCHE","MANTEAU","MOUCHOIR","MOUFLE","NOEUD","PAIRE","PANTALON","PIED","POCHE","PRINCE","PYJAMA","REINE","ROBE","ROI","RUBAN","SEMELLE","SOLDAT","SOCIERE","TACHE","TAILLE","TALON","TISSU","TRICOT","UNIFORME","VALISE","VESTE","VETEMENT","CHANGER","CHAUSSER","COUVRIR","DEGUISER","DESHABILLER","ENLEVER","HABILLER","LACER","PORTER","RESSEMBLER","CLAIR","COURT","ETROIT","FONCE","JOLI","LARGE","LONG","MULTICOLORE","NU","USE","BIEN","MAL","MIEUX","PRESQUE","AIGUILLE","AMPOULE","AVION","BOIS","BOUT","BRICOLAGE","BRUIT","CABANE","CARTON","CLOU","COLLE","CROCHET","ELASTIQUE","FICELLE","FIL","MARIONNETTE","MARTEAU","METAL","METRE","MORCEAU","MOTEUR","OBJET","OUTIL","PEINTURE","PINCEAU","PLANCHE","PLATRE","SCIE","TOURNEVIS","VIS","VOITURE","ARRACHER","ATTACHER","CASSER","COUDRE","DETRUIRE","ECORCHER","ENFILER","ENFONCER","FABRIQUER","MESURER","PERCER","PINCER","REPARER","REUSSIR","SERVIR","TAPER","TROUER","TROUVER","ADROIT","DIFFICILE","DUR","FACILE","LISSE","MALADROIT","POINTU","TORDU","ACCIDENT","AEROPORT","CAMION","ENGIN","FEU","FREIN","FUSEE","GARAGE","GARE","GRUE","HELICOPTERE","MOTO","PANNE","PARKING","PILOTE","PNEU","QUAI","TRAIN","VIRAGE","VITESSE","VOYAGE","WAGON","ZIGZAG","ARRETER","ATTERRIR","BOUDER","CHARGER","CONDUIRE","DEMARRER","DISPARAITRE","DONNER","ECRASER","ENVOLER","GARDER","GARER","MANQUER","PARTIR","POSER","RECULER","ROULER","TENDRE","TRANSPORTER","VOLER","ABIME","ANCIEN","BLANC","BLEU","CASSE","CINQ","DERNIER","DEUX","DEUXIEME","DIX","GRIS","GROS","HUIT","JAUNE","MEME","NEUF","PAREIL","PREMIER","QUATRE","ROUGE","SEPT","SEUL","SIX","SOLIDE","TROIS","TROISIEME","UN","VERT","DESSUS","AUTOUR","VITE","VERS","ACROBATE","ARRET","ARRIERE","BARRE","BARREAU","BORD","BRAS","CERCEAU","CHAISE","CHEVILLE","CHUTE","COEUR","CORDE","CORPS","COTE","COU","COUDE","CUISSE","DANGER","DOIGTS","DOS","ECHASSES","ECHELLE","EPAULE","EQUIPE","ESCABEAU","FESSE","FILET","FOND","GENOU","GYMNASTIQUE","HANCHE","JAMBE","JEU","MAINS","MILIEU","MONTAGNE","MUR","ESCALADE","MUSCLE","NUMERO","ONGLE","PARCOURS","PAS","PASSERELLE","PENTE","PEUR","PIED","PLONGEOIR","POIGNET","POING","PONT","SIGNE","SINGE","POUTRE","EQUILIBRE","PRISE","RIVIERE","CROCODILE","ROULADE","PIROUETTE","SAUT","SERPENT","SPORT","SUIVANT","TETE","TOBOGGAN","TOUR","TRAMPOLINE","TUNNEL","VENTRE","ACCROCHER","APPUYER","ARRIVER","BAISSER","BALANCER","BONDIR","BOUSCULER","COGNER","COURIR","DANSER","DEPASSER","DESCENDRE","ECARTER","ESCALADER","GAGNER","GENER","GLISSER","GRIMPER","MARCHER","PATTES","DEBOUT","MONTER","MONTRER","PENCHER","PERCHER","PERDRE","RAMPER","RATER","REMPLACER","RESPIRER","RETOURNER","REVENIR","SAUTER","SOULEVER","SUIVRE","TOMBER","TRANSPIRER","TRAVERSER","DANGEUREUX","EPAIS","FORT","GROUPE","IMMOBILE","ROND","SERRE","SOUPLE","ENSEMBLE","ICI","JAMAIS","TOUJOURS","SOUVENT","BAGARRE","BALANCOIRE","BALLON","BANDE","BICYCLETTE","BILLE","CAGE","ECUREUIL","CERF","VOLANT","CHATEAU","COUP","COUR","COURSE","ECHASSE","FLAQUE","EAU","PAIX","PARDON","PARTIE","PEDALE","PELLE","POMPE","PREAU","RAQUETTE","RAYON","RECREATION","SABLE","SIFFLET","SIGNE","TAS","TRICYCLE","TUYAU","VELO","FILE","RANG","BAGARRER","BATTRE","CACHER","CRACHER","CREUSER","CRIER","DEGONFLER","DISPUTE","EMPECHER","GALOPER","HURLER","JONGLER","LANCER","PEDALER","PLAINDRE","PLEURER","POURSUIVRE","PROTEGER","SAIGNER","SALIR","SIFFLER","SURVEILLER","TRAINER","TROUVER","FOU",
"PAUDREY"];

//unicode fun...
const letterEmojisMap = {
    "🅰️": "A", "🇦": "A", "🅱️": "B", "🇧": "B", "🇨": "C", "🇩": "D", "🇪": "E",
    "🇫": "F", "🇬": "G", "🇭": "H", "ℹ️": "I", "🇮": "I", "🇯": "J", "🇰": "K", "🇱": "L",
    "Ⓜ️": "M", "🇲": "M", "🇳": "N", "🅾️": "O", "⭕": "O", "🇴": "O", "🅿️": "P",
    "🇵": "P", "🇶": "Q", "🇷": "R", "🇸": "S", "🇹": "T", "🇺": "U", "🇻": "V", "🇼": "W",
    "✖️": "X", "❎": "X", "❌": "X", "🇽": "X", "🇾": "Y", "💤": "Z", "🇿": "Z"
}

class Pendu {
    constructor() {
        this.gameEmbed = null;
        this.inGame = false;
        this.word = "";
        this.guesssed = [];
        this.wrongs = 0;
    }

    newGame(msg) {
        if (this.inGame)
            return;

        this.inGame = true;
        this.word = possible_words[Math.floor(Math.random() * possible_words.length)].toUpperCase();
        this.guesssed = [];
        this.wrongs = 0;


        const embed = new Discord.MessageEmbed()
            .setColor('#db9a00')
            .setTitle('The Best Pendu !\n(parce que c’est jojo qui l’a fait)')
            .setDescription(this.getDescription())
            .addField('Lettres devinées :', '\u200b')
            .addField('Comment jouer :', "Réagissez à ce message en utilisant les émojis qui ressemblent à des lettres\nExemple :  🅰️ ,  🇹 , ...")
            .setTimestamp();

        msg.channel.send(embed).then(emsg => {
            this.gameEmbed = emsg;
            this.waitForReaction();
        });
    }

    makeGuess(reaction) {
        if (Object.keys(letterEmojisMap).includes(reaction)) {
            const letter = letterEmojisMap[reaction];
            if (!this.guesssed.includes(letter)) {
                this.guesssed.push(letter);

                if (this.word.indexOf(letter) == -1) {
                    this.wrongs++;

                    if (this.wrongs == 6) {
                        this.gameOver(false);
                    }
                }
                else if (!this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").includes("_")) {
                    this.gameOver(true);
                }
            }
        }

        if (this.inGame) {
            const editEmbed = new Discord.MessageEmbed()
                .setColor('#db9a00')
                .setTitle('The Best Pendu !\n(parce que c’est jojo qui l’a fait)')
                .setDescription(this.getDescription())
                .addField('Lettres devinées :', this.guesssed.length == 0 ? '\u200b' : this.guesssed.join(" "))
                .addField('Comment jouer :', "Réagissez à ce message en utilisant les émojis qui ressemblent à des lettres\nExemple :  🅰️ ,  🇹 , ...")
                .setTimestamp();
            this.gameEmbed.edit(editEmbed);
            this.waitForReaction();
        }
    }

    gameOver(win) {
        this.inGame = false;
        const editEmbed = new Discord.MessageEmbed()
            .setColor('#db9a00')
            .setTitle('The Best Pendu !\n(parce que c’est jojo qui l’a fait)')
            .setDescription((win ? "Gagné !" : "Perdu") + "\n\nLe mot était : " + this.word)
            .setTimestamp();
        this.gameEmbed.edit(editEmbed);

        this.gameEmbed.reactions.removeAll();
    }

    getDescription() {
        return "```"
            + "|‾‾‾‾‾‾|   \n|     "
            + (this.wrongs > 0 ? "🎩" : " ")
            + "   \n|     "
            + (this.wrongs > 1 ? "😟" : " ")
            + "   \n|     "
            + (this.wrongs > 2 ? "👕" : " ")
            + "   \n|     "
            + (this.wrongs > 3 ? "🩳" : " ")
            + "   \n|    "
            + (this.wrongs > 4 ? "👞👞" : " ")
            + "   \n|     \n|__________\n\n"
            + this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").join(" ")
            + "```";
    }

    waitForReaction() {
        this.gameEmbed.awaitReactions(() => true, { max: 1, time: 300000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                this.makeGuess(reaction.emoji.name);
                reaction.remove();
            })
            .catch(collected => {
                this.gameOver(false);
            });
    }
}

module.exports = Pendu;