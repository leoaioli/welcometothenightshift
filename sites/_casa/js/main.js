function test() {
  console.log('hi');
}

test();


function chngimg() {
  var img = document.getElementById('gifactivate').src;
  if (img.indexOf('palma.gif')!=-1) {
      document.getElementById('gifactivate').src = 'img/palmasingola.png';
  }
   else {
     document.getElementById('gifactivate').src = 'img/palma.gif';
 }
}

var gifImage = document.getElementById('gifactivate1');
  
gifImage.addEventListener('click', function() {
  // Set the src attribute to the actual GIF URL
  gifImage.src = 'img/okkio.gif';
  
  // After a delay, reset the src attribute to stop the GIF
  setTimeout(function() {
    gifImage.src = 'img/okkio.png';
  }, 1000); // Adjust the time (in milliseconds) based on the duration of your GIF
});

// SOUND

document.addEventListener('DOMContentLoaded', function () {
  // Create an AudioContext
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Load and decode audio files
  function loadAudio(url, callback) {
      fetch(url)
          .then(response => response.arrayBuffer())
          .then(data => audioContext.decodeAudioData(data, callback));
  }

  // Two audio buffers
  let buffer1, buffer2;

  // Load your audio files
  loadAudio('audio/crickets.mp3', function (decodedBuffer1) {
      buffer1 = decodedBuffer1;
  });

  loadAudio('audio/windy.mp3', function (decodedBuffer2) {
      buffer2 = decodedBuffer2;
  });

  // Function to play the sounds simultaneously
  function playSounds() {
      // Create audio sources
      const source1 = audioContext.createBufferSource();
      const source2 = audioContext.createBufferSource();

      // Assign buffers to sources
      source1.buffer = buffer1;
      source2.buffer = buffer2;

      // Connect sources to the audio context's destination (speakers)
      source1.connect(audioContext.destination);
      source2.connect(audioContext.destination);

      // Start playing the sounds
      source1.start();
      source2.start();
      
      // Set the loop property for each source
      source1.loop = true;
      source2.loop = true;

      // Remove the event listener after the first click
      document.getElementById('playButton').removeEventListener('click', playSounds);
  }

  // Add click event listener to the button
  document.getElementById('playButton').addEventListener('click', playSounds);
});


// SOUND DELAY

document.getElementById('playButton2').addEventListener('click', function() {
  // Check if the button has already been clicked
  if (!this.hasAttribute('data-clicked')) {
    // Set attribute to mark as clicked
    this.setAttribute('data-clicked', 'true');
    
    // Set a timeout for 1 minute (60,000 milliseconds) before playing sound
    setTimeout(function() {
      playSound();
    }, 60000);
  }
});

function playSound() {
  // Create an audio element
  var audio = new Audio('audio/siren.mp3');

    // Set the volume to 0.5 (adjust as needed)
    audio.volume = 0.03;
  
  // Play the sound
  audio.play();
}

  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });