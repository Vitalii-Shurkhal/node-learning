const functions = require("./functions");

// console.log('Hello Node.JS');

// functions.sayHello()
// functions.add(12, 2)

const express = require("express");
const path = require("path")
const port = process.env.PORT || 3000;
const app = express();
app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))


app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "BackEnd",
        someText: functions.someText,
        someFunc: functions.someFunc()
    })
})

app.get('/aboute', function (req, res) {
    res.render('aboute', {
        mainName: "Vitalii Shurkhal"
    })
})

app.listen(port);





// ------------------------------------------
 // without  of Express for running server 
// const handler = (request, response) => {
//     console.log('Example message');
//     response.end('Hello world');
// }


// const server = http.createServer(handler);

// server.listen(3000, (err) => {

//     if (err) { return console.log(`błąd: ${err}`) }
//     console.log('serwer dziala na porcie 3000')
// });
