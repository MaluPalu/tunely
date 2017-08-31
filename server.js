const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

const controllers = require('./controllers');

app.get('/api', controllers.api.index);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res){
  res.sendFile('views/index.html' , {root : __dirname});
});

app.get('/api/albums', controllers.album.index);



app.get('/api/albums', function (req, res) {
  db.Album.find(function(err, albums){
    if (err) {
      console.log("index error" + err);
      res.sendStatus(500);
    }
    res.send(albums);
  });
});













app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely app is listening at http://localhost:3000/');
});
