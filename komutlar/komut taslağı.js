const Discord = require('discord.js');


exports.run = function(client, message) {

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: '8ball 2023 Süper Güç olmak biz?', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: '8ball 2023 Süper Güç olmak biz?' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz