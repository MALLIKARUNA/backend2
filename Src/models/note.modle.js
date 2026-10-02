const mongooes = require('mongoose');
// import the package

const noteSchema = new mongooes.Schema({
    // create the Schema
    title: String,
    description: String,
    publish: Number
})
// create the model
const noteModel = mongooes.model("note", noteSchema)
// export the model
module.exports = noteModel
// export to the app.js
