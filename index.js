const express = require('express');
const compression = require('compression')
const app = express();
const http = require('http');
const server = http.createServer(app)
const ejs = require('ejs')


app.use(compression())

app.use('/css', express.static(__dirname + '/app/css'));
app.use('/imges', express.static(__dirname + '/app/imges/'));
app.use('/js', express.static(__dirname + '/app/js/'));


app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

PORT = process.env.PORT || 3000
server.listen(PORT, function () {
    console.log(`Server started on port: ${PORT}`)
})

app.get('/', async function (req, res) {
    res.render(__dirname + '/app/index.html');
});

