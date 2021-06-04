const Discord = require('discord.js');

class Fast {
    constructor() {
        this.fastSansEspace = null;
        this.inGame = false;
        this.time = 60000;
        this.urlGif;
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
            this.urlGif = 'https://media1.tenor.com/images/9d8563eac0fa88227b20dc6bb66ee34b/tenor.gif?itemid=12753210';
            fast = this.randomString(15, 'abcdefghijklmnopqrstuvwxyz');
        }
        else if (niv === '2') {
            this.urlGif = 'http://media0.giphy.com/media/CNhA74HXGqFOg/200.gif';
            fast = this.randomString(15, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        }
        else if (niv === '3') {
            this.urlGif = 'https://media1.tenor.com/images/a48b14931c37e6f64fb8b1c2647ee09a/tenor.gif?itemid=17962887';
            fast = this.randomString(15, 'ABCDEFGHIJKLMNOPQRSTUVWXYZaàbcçdeêëéèfghijklmnopqrstuùvwxyz0123456789');
        }
        else if (niv === '4') {
            this.urlGif = 'https://data.photofunky.net/output/image/e/4/7/a/e47a95/photofunky.gif';
            fast = this.randomString(15);
        }
        else if (niv === '5') {
            this.urlGif = 'https://www.welovebuzz.com/wp-content/uploads/2018/01/typing.gif';
            fast = this.randomString(25);
        }
        else if (niv === '#') {
            this.urlGif = 'https://media1.tenor.com/images/841aeb9f113999616d097b414c539dfd/tenor.gif?itemid=5368357';
            fast = this.randomString(45);
        }
        else if (niv === '##') {
            this.urlGif = 'https://i.pinimg.com/originals/40/f4/a5/40f4a53b243411e246d7af7e24160e51.gif';
            fast = this.randomString(60);
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#55CEE8')
            .setTitle("Fast")
            .addField("Chaine à recopier", fast + "\n(Les espaces ne sont pas à recopier, ils sont juste là pour éviter le copier-coller)"
                      , false)
            .setImage(this.urlGif)
            .setTimestamp();
            message.channel.send(embed);

        var hrTime = process.hrtime();
        this.time = hrTime[0] * 1000 + hrTime[1] / 1000000;

        this.fastSansEspace = fast.replace(/ /g,"")
        
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
                this.inGame = false;
                return;
            })
            .catch(collected => {
                message.channel.send('Temps écoulé !');
                this.inGame = false;
                return;
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