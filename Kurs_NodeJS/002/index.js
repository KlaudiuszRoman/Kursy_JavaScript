const ejs = require('ejs');

var countries= ['Poland', 'England', 'France', 'Belgium'];

ejs.renderFile('template.ejs',{name: 'world', countries: countries}, function(err,data){
    console.log(data);
});

//console.log(template);
/*let express = require('express');
let app = express();

//app.get('/', (req, res) => res.send('Hello world'));


var middleware = function(req,res,next){

    console.log('new request')
    res.send('Akuku!');
    //next();
};

app.use(middleware);
app.use('/api/getRandomNumber',middleware);
app.all('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/api/getRandomNumber', function (rwq, res) {
    res.send({
        randomNumber: Math.random()
    })
});

app.get('/api/random/min/:min/max/:max', function (req, res) {
    var min = Number(req.params.min);
    var max = Number(req.params.max);

    var randomNumber = Math.floor((Math.random() * max) + min);
    res.send({
        randomNumber
    });
});

app.listen(3000, () => console.log('Nasz serwer dziła na porcie 3000'));*/