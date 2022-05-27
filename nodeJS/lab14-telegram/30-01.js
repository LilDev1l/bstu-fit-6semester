const TelegramBot = require('node-telegram-bot-api');
const token = '5242754522:AAEMvwGeDBjkhcB20ALFTuf6F6TP3tw-cPY';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/(.)/, msg => {
    bot.sendMessage(msg.chat.id, 'echo: ' + msg.text);
});

bot.on('polling_error', (err) => console.error(err));


