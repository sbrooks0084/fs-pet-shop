const http = require('http'); //grab module and store in variable
const fs = require('fs')  //grabs file share module and stores in var
const port = 7777  //this is our door to the data

const server = http.createServer();  //from http var, create server - aka: localhost

server.on('request', function (req, res) {  //handles the request and response; allows request and grabs data from diff files
    
    if (req.url === '/pets') {     //request pets endpoint from url
        fs.readFile('pets.json', 'utf-8', function (err, data) {   //use fs.readFile to grab
            if (err) {
                console.log("trash")
                process.exit(1)
            }

            let petData = data
            res.status = 200;
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(petData))
        })

    }

})


server.listen(port, function () {
    console.log(`listening on port: ${port}`)
})
