const mongooes = require('mongoose');
// mongoose is package Use Mongoose to connect our Node.js application to MongoDB.
const app = require('../app');

async function connectedDb() {
    // "aWait here until the MongoDB connection finishes."
    // Waits for an asynchronous operation to finish before moving to the next line.
    await mongooes.connect("mongodb+srv://Backend1:yXudRErWpUyxJ2Tg@cluster1.l35qk0p.mongodb.net/backend")// this is the cluster url not a database after /mallu is the database name
    console.log("MongoDB is connected")
}
module.exports = connectedDb
