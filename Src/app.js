const dns = require('dns');
dns.setServers(['8.8.8.8']);

const express = require('express');
const noteModel = require("./models/note.modle")
const app = express();
app.use(express.json()); // this is midle ware
const notes = []
// {
// -----this are the api----
//  post / note=> create a Node
//  get /note=>get the data form server
//  update/note:id=> update the data
//  delete/note:id=> delete the note
// }
app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description,
        publish: data.publish
    })
    res.status(201).json({
        message: "note created succesfully"
    })
})
app.get('/notes', async (req, res) => {
    // const note = await noteModel.find() 
    const note = await noteModel.findOne({
        publish: 2023
    })
    /*
     find=>[{}{}]or [] =its return the object of array
     findone=>{}or null= dose not return object of array
    */
    res.status(200).json({
        message: "data is get form sever",
        notes: note
    })

})

module.exports = app; 