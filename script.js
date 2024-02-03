const images = document.querySelectorAll('.image-fade');

function rotateImages() {
    const activeImage = document.querySelector('.image-fade.active');
    activeImage.classList.remove('active');

    const nextImage = activeImage.nextElementSibling || images[0];
    nextImage.classList.add('active');
} setInterval(rotateImages, 5000);


//nav ko text dekhaune tarika/script
function showContent(buttonNumber) {
    // Hide all content divs
    for (let i = 1; i <= 4; i++) {
        document.getElementById('content' + i).classList.remove('active');
    }

    // Show the selected content div
    document.getElementById('content' + buttonNumber).classList.add('active');
}


function openUrl(url) {
    // Open the URL in a new tab
    window.open(url, '_blank');
  }

let home = document.getElementById('home');
let team = document.getElementById('team');
let projects = document.getElementById('projects');
let fqa = document.getElementById('fqa');

let home_mbl = document.getElementById('home_mbl');
let team_mbl = document.getElementById('team_mbl');
let projects_mbl = document.getElementById('projects_mbl');
let fqa_mbl = document.getElementById('fqa_mbl');

let logodis = document.getElementById('logo_description')
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');

home.addEventListener('click', function () {
    section1.style.display = 'flex';
    logodis.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
})

team.addEventListener('click', function () {
    section1.style.display = 'none';
    logodis.style.display = 'none';
    section2.style.display = 'flex';
    section3.style.display = 'none';
})

projects.addEventListener('click', function () {
    section1.style.display = 'none';    
    logodis.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'flex';
})

fqa.addEventListener('click', function () {
    section1.style.display = 'flex';
    logodis.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
})

//mobile//
home_mbl.addEventListener('click', function () {
    section1.style.display = 'flex';
    logodis.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
})

team_mbl.addEventListener('click', function () {
    section1.style.display = 'none';
    logodis.style.display = 'none';
    section2.style.display = 'flex';
    section3.style.display = 'none';
})

projects_mbl.addEventListener('click', function () {
    section1.style.display = 'none';    
    logodis.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'flex';
})

fqa_mbl.addEventListener('click', function () {
    section1.style.display = 'flex';
    logodis.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
})





document.addEventListener('DOMContentLoaded', function () {
    // Get the counter element
    var counterElement = document.getElementById('counter');
  
    // Set the target number
    var targetNumber = 6;
    var duration = 2000; // Animation duration in milliseconds
    var interval = 20; // Update interval in milliseconds
    var repeatInterval = 10000; // Repeat interval in milliseconds
  
    // Function to update the counter at regular intervals
    function updateCounter() {
      var increment = targetNumber / (duration / interval);
      var currentValue = 0;
  
      // Increment the counter at regular intervals
      function step() {
        currentValue += increment;
        counterElement.textContent = Math.round(currentValue);
  
        if (currentValue < targetNumber) {
          // Call the function again after the interval
          setTimeout(step, interval);
        }
      }
  
      // Start the count-up animation
      step();
  
      // Repeat the animation after the repeat interval
      setTimeout(updateCounter, repeatInterval);
    }
  
    // Initial call to start the animation
    updateCounter();
  });