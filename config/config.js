require('dotenv').config();

var config = {
    CONSUMER_KEY: process.env.CONSUMER_KEY,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_SPREADSHEET_ID: process.env.GOOGLE_SPREADSHEET_ID

};

module.exports = config;