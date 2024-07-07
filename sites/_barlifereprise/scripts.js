
// NAV BUTTONS

document.getElementById('custom-button').addEventListener('click', function() {
  // Replace the URLs in the array with the URLs of the pages you want to link to
  var pageURLs = ['/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];

  // Generate a random index to pick a random page from the array
  var randomIndex = Math.floor(Math.random() * pageURLs.length);

  // Redirect to the randomly selected page
  window.location.href = pageURLs[randomIndex];
});


// RADIO PLAYER

  const radioSelector = document.getElementById('radioSelector');
  const radioPlayer = document.getElementById('radioPlayer');

  // Replace the following with the streaming URLs of your radio stations
  const radioStations = {
      radio1: 'https://stream10.xdevel.com/audio32s975552-1839/stream/icecast.audio',
      radio2: 'https://ice07.fluidstream.net/Ibiza.mp3',
      radio3: 'http://icestreaming.rai.it/5.mp3',
      radio4: 'https://streams.radiobob.de/bob-live/aac-64',
      radio5: 'https://saw-de-hz-fal-stream07-cluster01.radiohost.de/saw_128?context=fHA6LTE',
      radio6: 'https://dublabde.out.airtime.pro:8000/dublabde_a',
      radio7: 'https://ice07.fluidstream.net/Ibiza.mp3',
      radio8: 'http://direct.fipradio.fr/live/fip-midfi.mp3',
      radio9: 'https://dreamsiteradiocp5.com/proxy/rmitalia?mp=/stream'

      // Add more stations as needed
  };

  // Set up audio element with default station
  radioPlayer.src = radioStations[radioSelector.value];

  function changeRadio() {
      const selectedStation = radioSelector.value;
      radioPlayer.src = radioStations[selectedStation];
      radioPlayer.play(); // Start playing the selected station
  }
  
  function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
  }


  