function test() {
  console.log('hi');
}

test();



  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });

// TOGGLE IMAGE

function toggleImage() {
  var fullscreenImage = document.getElementById('fullscreen-image');
  var overlayImage = document.getElementById('overlay-image');

  if (overlayImage.style.display === 'none') {
      overlayImage.style.display = 'block';
      fullscreenImage.style.display = 'none';
  } else {
      overlayImage.style.display = 'none';
      fullscreenImage.style.display = 'block';
  }
}

