console.log("its not even a representetion of the real worl");

/* let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = function(){
    menu.classList.toggle('active')
}
 */
     // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_cena/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });