function test() {
  console.log('hi');
}

test();


  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });
  
// DRAWING BOARD STARS

document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas and context
  const canvas = document.getElementById('drawing-canvas');
  const context = canvas.getContext('2d');

  // Set canvas size to match the image size
  const img = document.getElementById('background-img');
  canvas.width = img.width;
  canvas.height = img.height;

  // Variables for drawing
  let isDrawing = false;
  let cancelDrawing = false;

   // Set initial pen color
  context.strokeStyle = '#fffb82'; // You can set this to any valid color value
  context.lineWidth = 10; // You can set this to any positive value for thickness

    // Drop shadow properties
    context.shadowColor = 'rgba(255, 94, 196, 0.3)';
    context.shadowBlur = 10;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

  // Event listeners
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  window.addEventListener('mouseup', stopDrawing);
  window.addEventListener('keydown', cancelDrawingByKey);


  function startDrawing(e) {
    isDrawing = true;
    
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  function draw(e) {
    if (!isDrawing) return;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
  }

  function stopDrawing() {
    isDrawing = false;
    context.closePath();
  }

  function cancelDrawingByKey(e) {
    if (e.key.toLowerCase() === 'c') {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
});

