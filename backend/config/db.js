require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;