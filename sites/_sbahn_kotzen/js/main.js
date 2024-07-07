function test() {
  console.log('hi');
}

function chngimg() {
  var img = document.getElementById('gifactivate').src;
  if (img.indexOf('vomitesta_web.gif')!=-1) {
      document.getElementById('gifactivate').src = 'images/vomitesta_web.png';
  }
   else {
     document.getElementById('gifactivate').src = 'images/vomitesta_web.gif';
 }
}

var gifImage = document.getElementById('gifactivate1');
  
gifImage.addEventListener('click', function() {
  // Set the src attribute to the actual GIF URL
  gifImage.src = 'images/el_fumador.gif';
});


document.addEventListener("click", function() {
  var audio = document.getElementById("backgroundAudio");

  // Check if the audio is already playing
  if (audio.paused) {
    // Start playing the audio
    audio.play();
  }
});

 // Set the initial volume to 70% (0.7)
 document.getElementById("backgroundAudio").volume = 0.5;



  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });