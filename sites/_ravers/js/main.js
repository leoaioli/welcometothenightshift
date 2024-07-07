function test() {
  console.log('hi');
}

test();



// Define a mapping of keys to sound files
var keySoundMapping = {
  'KeyB': 'audio/classic_bass.wav',
  'KeyP': 'audio/pad.wav',
  'KeyK': 'audio/kick.wav',
  'KeyS': 'audio/snare.wav'
};

var saturationValues = [100, 300];
var currentSaturationIndex = 0;

document.addEventListener('keydown', function(event) {
  // Check if the pressed key is in the mapping
  if (keySoundMapping.hasOwnProperty(event.code)) {
    // Get the sound file for the pressed key
    var soundFile = keySoundMapping[event.code];

    // Play the sound
    playSound(soundFile);
  }

  // Change saturation on any key press
  changeSaturation();
});

function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

function changeSaturation() {
  // Get the image element
  var blendImage = document.getElementById('blendImage');

  // Change the saturation
  currentSaturationIndex = (currentSaturationIndex + 1) % saturationValues.length;
  var newSaturation = saturationValues[currentSaturationIndex];
  blendImage.style.filter = 'saturate(' + newSaturation + '%)';

  // Log the current saturation for demonstration purposes
  console.log('Saturation:', newSaturation);
}

  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });


  // INFOBOX

// info button
document.addEventListener("DOMContentLoaded", function () {
  // Get the image
  const infoImage = document.getElementById("question");

  // Add click event listener to the image
  infoImage.addEventListener("click", function () {
      // Display an alert box with the information
      alert("This page is here for partying, you can keep any key pressed to have a strobelight effect, also you can practice finger-drumming: K= Kick ; B= Bass ; S= Snare; P= Pad");
      // You can customize the alert message as needed
  });
});

