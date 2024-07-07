$(document).ready(function(){

  $('.layer2').ripples({
    resolution: 912,
	  dropRadius: 120,
	  perturbance: 0.0001,
  });

})

const customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
  // Update the position of the custom cursor based on the mouse coordinates
  const x = e.clientX;
  const y = e.clientY;
  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;
});


//hidden images hover effect

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".hidden-imago");
  const hiddenImages = document.querySelectorAll(".pesce-nascosto");
  const cursorSize = 100; // Set the size of the cursor/gif

container.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  hiddenImages.forEach(image => {
      const imageRect = image.getBoundingClientRect();

      const isCursorOverImage =
          mouseX >= imageRect.left &&
          mouseX <= imageRect.right &&
          mouseY >= imageRect.top &&
          mouseY <= imageRect.bottom;

      const isCursorWithinGif =
          mouseX >= event.pageX - cursorSize / 2 &&
          mouseX <= event.pageX + cursorSize / 2 &&
          mouseY >= event.pageY - cursorSize / 2 &&
          mouseY <= event.pageY + cursorSize / 2;

      if (isCursorOverImage && isCursorWithinGif) {
          image.style.opacity = 1;
      } else {
          image.style.opacity = 0;
      }
  });
});

// Handle the case when the cursor moves away from the hidden images
container.addEventListener("mouseleave", function () {
  hiddenImages.forEach(image => {
      image.style.opacity = 0;
  });
});
});


//WATERY SPLASH SOUND ON MOUSEMOVE

 // Create an audio element and set the source to your watery sound file
 const audio = new Audio('audio/splash.mp3');

 // Set the volume to 0.5
audio.volume = 0.1;


 // Function to play the watery sound
 function playWaterySound() {
   if (!audio.paused) {
     audio.pause(); // Stop the audio if it's already playing
   }
   audio.currentTime = 0; // Rewind the audio to the beginning
   audio.play(); // Play the watery sound
 }

 // Add an event listener to the document to detect cursor movements
 document.addEventListener('mousemove', playWaterySound);

  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });