function test() {
  console.log('hi');
}

test();

  // NAV BUTTONS

  document.getElementById('custom-button').addEventListener('click', function() {
    // Replace the URLs in the array with the URLs of the pages you want to link to
    var pageURLs = ['/sites/_barlifereprise/index.html','/sites/_casa/index.html', '/sites/_clebbino/index.html', '/sites/_loneliness_site/index.html', '/sites/_maar/index.html', '/sites/_moonshine/index.html', '/sites/_natura/index.html', '/sites/_paludo/index.html','/sites/_pesce/index.html','/sites/_ravers/index.html', '/sites/_ripple/index.html','/sites/_sbahn_kotzen/index.html','/sites/_sessone/index.html'];
  
    // Generate a random index to pick a random page from the array
    var randomIndex = Math.floor(Math.random() * pageURLs.length);
  
    // Redirect to the randomly selected page
    window.location.href = pageURLs[randomIndex];
  });


//IMAGE TOGGLE

/* let invertFilter = false;

  function toggleImages() {
    // Toggle invert filter for the main image
    invertFilter = !invertFilter;
    document.getElementById('lampada').style.filter = invertFilter ? 'invert(100%)' : 'none';

    // Toggle invert filter for the secondary image
    document.getElementById('amici2').style.filter = invertFilter ? 'invert(100%)' : 'none';

    // Toggle the source of the secondary image
    const secondaryImg = document.getElementById('amici2');
    if (secondaryImg.src.includes('img/lacena.png')) {
      secondaryImg.src = 'img/lacena_inversa.png';
    } else {
      secondaryImg.src = 'img/lacena.png';
    }
    
    // Toggle the display of the secondary image
    secondaryImg.style.display = secondaryImg.style.display === 'none' ? 'inline' : 'none';


    // Toggle the visibility of the main image
    const mainImg = document.getElementById('amici');
    mainImg.style.display = mainImg.style.display === 'none' ? 'inline' : 'none';
  } */

  function toggleImages() {
    var image1 = document.getElementById("lampada");
    var image2 = document.getElementById("amici");

    // Toggle the "inverted" class for the first image
    image1.classList.toggle("inverted");

    // Toggle the "inverted" attribute for the second image
    if (image2.style.filter === "invert(100%)") {
        image2.style.filter = "none";
    } else {
        image2.style.filter = "invert(100%)";
    }

    // Change the source of the second image
    var srcEndsWith = "lacena.png";
    if (image2.src.endsWith(srcEndsWith)) {
        image2.src = image2.src.replace(srcEndsWith, "lacena_inversa.png");
    } else {
        image2.src = image2.src.replace("lacena_inversa.png", srcEndsWith);
    }
}
