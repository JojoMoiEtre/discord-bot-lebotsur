const Discord = require('discord.js');

class Avatar {
    constructor() {
        this.messageEmbed = null;
    }

    async run (message, member) {

        let avatar = member.displayAvatarURL({size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar de ${member.username}`)
        .setImage(avatar)
        .setColor("#1BD69A")

        message.channel.send(embed);
    }
}

module.exports = Avatar;