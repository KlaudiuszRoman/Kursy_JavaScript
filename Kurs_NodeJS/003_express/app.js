let express = require('express');
let app = express();

//app.get('/', (req, res) => res.send('Hello world'));


var middleware = function(req,res,next){

    console.log('new request')
    res.send('Akuku!');
    //next();
};

//app.use(middleware);
//app.use('/api/getRandomNumber',middleware);

app.set('view engine','ejs')
app.all('/', function (req, res) {
    var countries= ['Poland', 'England', 'France', 'Belgium'];
    res.render('template',{name: 'world', countries: countries});
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
    res.send({randomNumber:randomNumber});
});

app.listen(3000, () => console.log('Nasz serwer dziła na porcie 3000'));