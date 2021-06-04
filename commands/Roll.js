const Discord = require('discord.js');

module.exports = {
    name: "roll",
    description: "Je choisis une valeur entre 0 et le nombre que tu as indiqué",

    async run (client, message, args) {

        var valroll = getRandomInt(Number(args)) + 1
        const embed = new Discord.MessageEmbed()
        .setColor('#278C37')
        .setTitle("Roll")
        .setDescription("Je choisis le numéro **" + valroll + "**")
        .setTimestamp();
        message.channel.send(embed);
    }
}