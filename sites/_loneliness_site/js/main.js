function test() {
  console.log('hi');
}

test();

function getRandomColor() {
  // Increase the chance of generating white color
  if (Math.random() < 0.9) {
    // 90% chance of generating white
    return 'rgba(255, 255, 255, 0.5)'; // You can adjust the alpha value as needed
  } else {
    // 10% chance of generating a random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
  }
}


function updateParticles(particles) {
  particles.forEach(particle => {
    particle.style.backgroundColor = getRandomColor();
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
  });
}

function createVisualNoise() {
  const noise = document.getElementById('noise');
  const numParticles = 10000;
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = getRandomColor();
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;

    noise.appendChild(particle);
    particles.push(particle);
  }

  function animate() {
    updateParticles(particles);
    requestAnimationFrame(animate);
  }

  animate(); // Start the animation loop
}

window.addEventListener('load', createVisualNoise);


// BROWN NOISE SOUND GENERATOR

 // Create an audio context
 const audioContext = new (window.AudioContext || window.webkitAudioContext)();

 // Create a brown noise buffer
 function createBrownNoiseBuffer() {
     const bufferSize = 2 * audioContext.sampleRate;
     const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
     const data = buffer.getChannelData(0);

     let lastValue = 0;

     for (let i = 0; i < bufferSize; i++) {
         const whiteNoise = Math.random() * 2 - 1;
         data[i] = (whiteNoise + lastValue) / 2; // Apply simple low-pass filter

         lastValue = data[i];
     }

     return buffer;
 }

 // Create a brown noise source
 const brownNoiseSource = audioContext.createBufferSource();
 brownNoiseSource.buffer = createBrownNoiseBuffer();
 brownNoiseSource.loop = true;

 // Create a gain node for controlling volume
 const gainNode = audioContext.createGain();
 brownNoiseSource.connect(gainNode);
 gainNode.connect(audioContext.destination);

 // Set volume and pitch for a bassy sound
 gainNode.gain.value = 0.05; // Adjust the volume as needed
 brownNoiseSource.playbackRate.value = 0.05; // Adjust the playback rate for a deeper sound

 // Function to start playing brown noise
 function startBrownNoise() {
     brownNoiseSource.start();
 }

 // Add event listener for mousemove to update parameters
 document.addEventListener('mousemove', (event) => {
     // Start playing brown noise after the first mouse movement
     startBrownNoise();
 });



  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });