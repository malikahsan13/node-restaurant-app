const dotenv = require("dotenv");
const result = dotenv.config();

const config = {
    SERVER_CONFIG:{
        SERVER_PORT: result.parsed.SERVER_PORT
    },
    DB_CONFIG:{
        DB_URL: result.parsed.DB_URL,
        DB_PORT: result.parsed.DB_PORT,
        DB_NAME: result.parsed.DB_NAME,
        DB_USERNAME: result.parsed.DB_USERNAME,
        DB_PASSWORD: result.parsed.DB_PASSWORD
    }
}

module.exports = config;