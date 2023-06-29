const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL

const connectDb = async () => {
try {
    
await mongoose.connect(MONGO_URL);
console.log('DB CONNECTED'.bgYellow.white)

} catch (error) {
    console.log(`db not connected ${error}`.bgRed.white);
}

}

module.exports = connectDb