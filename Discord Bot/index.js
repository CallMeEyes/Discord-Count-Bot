
var countNumber = 1;

const Discord = require('discord.js');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', message => {
 if (message.content == countNumber) {
        countNumber =  countNumber + 1;
    }
else (message.member.roles.remove("737058102167339089") & message.channel.send(countNumber));   


 });

client.login('Njk1NTI1OTgwMzU3Mzk0NDMz.XobdCw.DcJnHeHLL1JL277A2KXCKOTJvsk');


