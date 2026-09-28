const mongooes = require('mongoose');
const app = require('../app');

async function connectedDb() {
    // "aWait here until the MongoDB connection finishes."
    // Waits for an asynchronous operation to finish before moving to the next line.
    await mongooes.connect("mongodb+srv://mallu1:JSk8W5qOVocf71b0@backend.3iuflfl.mongodb.net/ningu")// this is the cluster url not a database after /mallu is the database name
    console.log("MongoDB is connected")
}
module.exports = connectedDb
