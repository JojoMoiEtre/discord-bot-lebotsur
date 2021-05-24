const Discord = require('discord.js');

class Fast {
    constructor() {
        this.fastSansEspace = null;
        this.inGame = false;
        this.time = 60000;
        }

    randomString(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZaàbcçdeêëéèfghijklmnopqrstuùvwxyz0123456789&"#\'{([-|_\\)]°+=}$*?,.;/:!';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1) + ' ';
        }
        return randomString;
    }

    newGame(message, niv) {
        if (this.inGame)
            return;

        var fast = 0;

        this.inGame = true;
        
        if (niv === '1') {
            fast = this.randomString(15, 'abcdefghijklmnopqrstuvwxyz');
        }
        else if (niv === '2') {
            fast = this.randomString(15, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        }
        else if (niv === '3') {
            fast = this.randomString(15, 'ABCDEFGHIJKLMNOPQRSTUVWXYZaàbcçdeêëéèfghijklmnopqrstuùvwxyz0123456789');
        }

        else if (niv === '4') {
            fast = this.randomString(15);
        }

        else if (niv === '5') {
            fast = this.randomString(25);
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#55CEE8')
            .setTitle("Fast")
            .addField("Chaine à recopier", fast + "\n(Les espaces ne sont pas à recopier, ils sont juste là pour éviter le copier-coller)"
                      , false)
            .setTimestamp();
            message.channel.send(embed);

        var hrTime = process.hrtime();
        this.time = hrTime[0] * 1000 + hrTime[1] / 1000000;

        this.fastSansEspace = fast.replace(/ /g,"")

        //message.channel.send(this.fastSansEspace);   // A SUP !!!
        
        this.waitForMessage(message);
    }

    waitForMessage(message) {
        message.channel.awaitMessages(response => response.content === this.fastSansEspace, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const response = collected.first();
                var hrTime = process.hrtime();
                var mili1 = hrTime[0] * 1000 + hrTime[1] / 1000000;
                this.time = mili1 - this.time;
                message.channel.send("Bien joué " + `${collected.first().author}`+ ", tu as réussi en " + this.msToTime(this.time) + " secondes ! :tada:"); 
            })
            .catch(collected => {
                message.channel.send('Temps écoulé !');
            });
    }


    msToTime(s) {
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
        }

        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;

        return pad(secs) + '.' + pad(ms, 3);
    }
}

module.exports = Fast;