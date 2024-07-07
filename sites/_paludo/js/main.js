function test() {
  console.log('hi');
}

test();

  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });

//PLAY AUDIO

document.addEventListener("click", function() {
  var audio = document.getElementById("backgroundAudio");

  // Check if the audio is already playing
  if (audio.paused) {
    // Start playing the audio
    audio.play();
  }
});

//PLAY AUDIO

document.addEventListener("click", function() {
  var audio = document.getElementById("backgroundFrogs");

  // Check if the audio is already playing
  if (audio.paused) {
    // Start playing the audio
    audio.play();
  }
});




//SCRATCHCARD

document.addEventListener("DOMContentLoaded", function () {
  const scratchImage = document.getElementById("scratch-image");
  const scratchContext = scratchImage.getContext("2d");
  const baseImage = new Image();
  const scratchOverlay = new Image();

  baseImage.src = "img/paludo.jpg";
  scratchOverlay.src = "img/overlay.png";

  Promise.all([loadImage(baseImage), loadImage(scratchOverlay)])
    .then(() => {
// Set canvas size to match the loaded images
      scratchImage.width = baseImage.width;  // Set width to base image width
      scratchImage.height = baseImage.height; // Set height to base image height

      scratchContext.drawImage(baseImage, 0, 0, scratchImage.width, scratchImage.height);
      scratchContext.globalCompositeOperation = "source-over";
      scratchContext.drawImage(scratchOverlay, 0, 0, scratchImage.width, scratchImage.height);

      // Add event listeners after the images are loaded
      scratchImage.addEventListener("mousedown", startDrawing);
      scratchImage.addEventListener("mousemove", draw);
      scratchImage.addEventListener("mouseup", stopDrawing);
      scratchImage.addEventListener("mouseout", stopDrawing);
    })
    .catch((error) => {
      console.error("Error loading images:", error);
    });

  function loadImage(image) {
    return new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject(new Error(`Failed to load ${image.src}`));
    });
  }

  let isDrawing = false;

  function startDrawing(e) {
    isDrawing = true;
    const rect = scratchImage.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
  
    const scaleX = scratchImage.width / rect.width;
    const scaleY = scratchImage.height / rect.height;
  
    scratchContext.globalCompositeOperation = "destination-out";
    scratchContext.lineWidth = 200;
    scratchContext.lineCap = "round";
    scratchContext.beginPath();
    scratchContext.moveTo(offsetX * scaleX, offsetY * scaleY);
  }
  
  function draw(e) {
    if (!isDrawing) return;
    const rect = scratchImage.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
  
    const scaleX = scratchImage.width / rect.width;
    const scaleY = scratchImage.height / rect.height;
  
    scratchContext.lineTo(offsetX * scaleX, offsetY * scaleY);
    scratchContext.stroke();
  }
  

  function stopDrawing() {
    isDrawing = false;
  }
});
