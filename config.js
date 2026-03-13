const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Zigma999/Zigma_sl/blob/main/images/Gemini_Generated_Image_lxytnqlxytnqlxyt%20copy.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 ,I'm Zigma_sl(MR.lelum's bot)  Alive Now😉😘😘*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
