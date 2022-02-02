const ejs = require('ejs');

var countries= ['Poland', 'England', 'France', 'Belgium'];

ejs.renderFile('template.ejs',{name: 'world', countries: countries}, function(err,data){
    console.log(data);
});