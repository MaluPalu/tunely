const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var AlbumSchema = new Schema({

});

var Album = mongoose.model('Album', AlbumSchema);

modeule.exports = Album;
