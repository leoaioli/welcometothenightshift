document.getElementById('logo').addEventListener('click', function() {
  this.style.display = 'none'; // Hide the image when clicked
  document.body.style.overflow = 'visible'; // Make content scrollable
});

$(document).ready(function(){
  console.log('Ready!');

  count = 0;
  $(document).click(function() {
    count++;

    if (count == 1) {
      const audio = new Audio("./audio/night-ambience-29548.mp3");
      audio.loop = true;
      audio.play();
    }

  });

});

function toggleMenu() {
  var menuList = document.querySelector('.menu-list');
  menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
}

function handleItemClick(option) {
  alert('You clicked on Option ' + option);
}

// info button
document.addEventListener("DOMContentLoaded", function () {
  // Get the image
  const infoImage = document.getElementById("question");

  // Add click event listener to the image
  infoImage.addEventListener("click", function () {
      // Display an alert box with the information
      alert("Welcome to the Night Shift! The general rule is: just click things, it will probably trigger something. Explore, and if you need some guidance, on the bottom left and right of each page are respectively a button back home and one that shuffles onward. For not so intuitive things there will be a question mark to click on.");
      // You can customize the alert message as needed
  });
});
