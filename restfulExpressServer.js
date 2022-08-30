const express = require('express')
const app = express()
const pets = require('./pets.json')
const fs = require('fs')
const PORT = 8000
const path = require('path')
const petsPath = path.join(__dirname, './pets.json')
console.log(petspath)

app.use(express.json())

app.get('/pets', (req, res) => {
    fs.readFile('./pets.json', 'utf-8', (err, data) => {
        console.log(JSON.parse(data))
        res.status(200)
        res.contentType('application/json')
        res.send(data)
    })
})

app.post('/pets', (req, res) => {
    fs.readFile('./pets.json', 'utf-8', (err, data) => {
        let parsedData = JSON.parse(data)
        let userInput = req.body
        parsedData.push(userInput)

        let JSONdata = JSON.stringify(parsedData)
        fs.writeFile('./pets.json', JSONdata, 'utf-8', (err) => {
            console.error(err)

            res.send(JSONdata)
        })
    })
})
    
    



app.post('/pets', function(req, res){
    fs.readFile(pets, 'utf-8', (err, data =>{

    }))
    res.status(200)
    res.contentType('application/json')
    
})






app.listen(`${PORT}`, () => {
    console.log(`Listening on port: ${PORT}`)
})

