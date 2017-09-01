const express = require("express");
const db = require("./models");
const app = express();
const controllers = require('./controllers');

app.get('/api', controllers.api.index);

app.use(express.static('public'));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res){
  res.sendFile('views/index.html' , {root : __dirname});
});

app.get('/api/albums', controllers.album.index);

app.post('/api/albums', controllers.album.create);

app.delete('/api/albums/:id', controllers.album.destroy);

app.put('/api/albums/:id', controllers.album.update);



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
