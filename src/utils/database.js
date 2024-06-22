const mongoose = require("mongoose");


async function databaseConnect(){
    let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/oct23-blog-db";

    await mongoose.connect(databaseURL);
    console.log("Database connecting completed!");
}

async function databaseClose(){
    await mongoose.connection.close();
    console.log("DB is disconnected!")
}

async function databaseClear(){
    await mongoose.connection.db.dropDatabase();
    console.log("Database dropped!")
}

module.exports = {
    databaseConnect,
    databaseClose,
    databaseClear
}