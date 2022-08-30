const express = require('express')
const app = express()
const animals = require('./pets.json')
const PORT = 9000


app.get('/pets', function(req, res){
    res.status(200)
    res.contentType('application/json')
    res.send(JSON.stringify(animals))
})

app.get('/pets/:id', function(req, res){
    let id = req.params.id
    if(id >= 0 && id < animals.length){
        res.status(200)
        res.contentType('application/json')
        res.send(animals[id])
    }else if(id < 0 || id > animals.length-1){
        res.status(404)
        res.contentType('text/plain')
        res.send('Not found')
       
    }
    
    
})




app.listen(PORT, function(req, res){
    console.log(`Listening on port: ${PORT}`)
})

module.exports = app