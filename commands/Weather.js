const weather = require('weather-js');
const Discord = require('discord.js');

class Weather {
    constructor() {
        this.messageEmbed = null;
    }

    async run (message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Veuillez spécifier un emplacement')

        if(result === undefined || result.length === 0) return message.channel.send('**Emplacement** invalide');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setColor('#A4E8FA')
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Prévisions météo pour ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuseau horaire', `UTC${location.timezone}`, true)
        .addField('Degré', 'Celsius', true)
        .addField('Température', `${current.temperature}°`, true)
        .addField('Vent', current.winddisplay, true)
        .addField('Ressenti', `${current.feelslike}°`, true)
        .addField('Humidité', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}

module.exports = Weather;