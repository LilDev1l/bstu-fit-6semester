const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000

let options =
{
    key: fs.readFileSync('./security/RS-LAB25-YMA-RSA.key'),
    cert: fs.readFileSync('./security/RS-YMA.crt')
};

app.get('/', (req, res) =>
{
    res.send("hello from https")
})

https.createServer(options, app).listen(port, () =>
{
    console.log(`https://localhost:${port}/`);
});