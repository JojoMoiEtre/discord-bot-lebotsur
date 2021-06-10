const Discord = require('discord.js');
const mysql = require('mysql');
const split = require ('split');

class Anniv {
    joyAnniv(bot, req) {
        var personne = "<@"+req[0].ID+">";
        if(req.length === 1) {
            if(personne.includes("716339634296062002")) {
                personne = personne + "*(Ui c mwa)*"
            }
            bot.channels.cache.get('852314796875448332').send("Hey @everyone ! Aujourd'hui est un jour spécial ! Pourquoi ? Parce que c’est l’anniversaire de "+personne+" :partying_face: :tada: \n*(C’est le moment parfait pour lui dire que c’est déjà un fossile ^^)*")
        }
        if(req.length > 1) {
            for(var i = 1 ; i < req.length ; i++) {
                if(i === req.length-1) {
                    personne = personne + " et <@"+req[i].ID+">";
                }
                else {
                    personne = personne + ", <@"+req[i].ID+">";
                }
                if(personne.includes("716339634296062002")) {
                    personne = personne + "*(Ui c mwa)*"
                }
            }
            bot.channels.cache.get('852314796875448332').send("Hey @everyone ! Aujourd'hui est un jour spécial ! Pourquoi ? Parce que c’est l’anniversaire de "+personne+" :partying_face: :tada: \n*(C’est le moment parfait pour leur dire que ce sont déjà des fossiles ^^)*")
        }
    }

    annivAdd(message, dateAnniv, db) {
        var date = dateAnniv.split("/");        
        db.query(`SELECT * FROM user WHERE ID = ${message.author.id}`, async (err, req) => {
            if(err) throw err;
            if(req.length < 1) {
                var sql = `INSERT INTO user (ID, DateJourMois, DateFull) VALUES (${message.author.id}, '${date[0]}/${date[1]}', '${dateAnniv}')`
                db.query(sql, function(err) {
                    if(err) throw err;
                    else message.channel.send("Ton anniversaire a bien été enregistré ^^");
                })
            }
            else {
                message.channel.send("Tu as déjà enregistré ta date d’anniversaire");
            }
        })
    }
}

module.exports = Anniv;
