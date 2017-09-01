
console.log('Sanity Checl');
/* CLIENT-SIDE JS
*
* You may edit this file as you see fit.  Try to separate different components
* into functions and objects as needed.
*
*/
/* end of hard-coded data */
function renderAlbums(albums) {
  for (let i = 0; i < albums.length; i++) {
    renderAlbum(albums[i]);
  };
  $('.createSong').on("click", function(e) {
    var id= $(this).closest('.album').data('album-id');
    $('#songModal').data('album-id', id).modal();
  });
}


  $('#saveSong').on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: 'api/albums',
      data: $('#songName', "#trackNumber");
    })
  })
}

function handleError(err){
  console.log('There has been an error: ', err);
}

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: renderAlbums,
    error: handleError
  });
  $('#singlebutton').on("submit", function(event) {
    console.log('in singlebutton submit');
    event.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      method: 'POST',
      url: 'api/albums',
      data: $(this).serialize(),
      success: renderAlbum,
      error: handleError
    })
  });
});
// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  var myAlbums = (`
  <div class="row album" data-album-id="${album._id}">

  <div class="col-md-10 col-md-offset-1">
  <div class="panel panel-default">
  <div class="panel-body">


  <!-- begin album internal row -->
  <div class='row'>
  <div class="col-md-3 col-xs-12 thumbnail album-art">
  <img src="/images/800x800.png" alt="album image">
  </div>

  <div class="col-md-9 col-xs-12">
  <ul class="list-group">
  <li class="list-group-item">
  <h4 class='inline-header'>Album Name:</h4>
  <span class='album-name'>${album.name}</span>
  </li>

  <li class="list-group-item">
  <h4 class='inline-header'>Artist Name:</h4>
  <span class='artist-name'>${album.artistName}</span>
  </li>

  <li class="list-group-item">
  <h4 class='inline-header'>Released date:</h4>
  <span class='album-releaseDate'>${album.releaseDate}</span>
  </li>
  <li class="list-group-item">
  <h4 class="inline-header">Songs:</h4>
  <span> – (1) Swamped – (2) Heavens a Lie –
  (3) Daylight Dancer – (4) Humane – (5) Self Deception –
  (6) Aeon – (7) Tight Rope – </span>
  <button type="button" class="createSong" class="btn btn-primary">Create Song</button>
  </li>
  </ul>
  </div>

  </div>
  <!-- end of album internal row -->

  <div class='panel-footer'>
  </div>

  </div>
  </div>
  </div>
  </div>
  `)
  $('#albums').append(myAlbums);
};
