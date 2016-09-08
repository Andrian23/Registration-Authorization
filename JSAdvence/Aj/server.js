var express = require('express'); 

var app = express();

var file = 'test.json'      

var path = require('path');
var bodyParser = require('body-parser')
var jsonfile = require('jsonfile')
app.use(bodyParser.json())     


app.get('/', function(req, res) {      
    res.sendFile(path.join(__dirname + '/index.html'));   
});


app.post('/update', function(req, res){  
    var user=req.body;                  
    var users=jsonfile.readFileSync(file);  
    users.push(user);   
    jsonfile.writeFileSync(file, users);   
});


app.post('/user', function (req, res) {  
    var user=req.body;                      
    var users=jsonfile.readFileSync(file);      
    var userAvtoriz;    
    for(var i=0;i<users.length;i++){         
        if(users[i].login==user.login&&users[i].password==user.password){
            userAvtoriz=users[i];  
        }
    }
    res.send(userAvtoriz);   
})




//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'root',
//  password : 'root',
//  database : 'test'
//});
//
//connection.connect();
//
//connection.query('SELECT * from products', function(err, rows, fields) {
//  if (!err)
//    console.log('The solution is: ', rows);
//  else
//    console.log('Error while performing Query.');
//});
//
//connection.end();






app.listen(8080, function(){
	console.log('listen on port');
});