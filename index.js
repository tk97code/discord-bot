require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const request = require('request');

const proxyUrl = 'https://desolate-brook-73717.herokuapp.com/';

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.author.bot) return;
  // else if (msg.content.startsWith('!kick')) {
  //   if (msg.mentions.users.size) {
  //     const taggedUser = msg.mentions.users.first();
  //     msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  //   } else {
  //     msg.reply('Please tag a valid user!');
  //   }
  // }
  let URL = `https://api.simsimi.net/v1/?text=${msg.content}&lang=vi`;
  //let URL = `https://tuanxuong.com/api/simsimi/index.php?text=${msg.content}`;
  const encodedURL = encodeURI(URL);
  console.log(encodedURL);

  request(encodedURL, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    //msg.reply(body.response); //tuanxuongAPI
    msg.reply(body.success); // mainAPI
  });
  
});
