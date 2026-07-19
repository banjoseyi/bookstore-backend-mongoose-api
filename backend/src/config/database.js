const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected !!! ${connectionInstance.connection.host}`);
    } catch (err) {
        console.error("MongoDB connection failed", err);
        process.exit(1);
    }
};

module.exports = connectDB;