const Discord = require('discord.js');



exports.run = async (client, message) => {
	message.delete();
    let devlog = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} bir devlog paylaştı.!`,
            image: {
                url: "https://i.imgur.com/N0yoMdI.gif"
            }
        }
    });
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'devlog', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'devlog'
};
