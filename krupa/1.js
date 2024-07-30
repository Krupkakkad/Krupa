
      // JavaScript to include the navbar
 fetch('nav.html')
 .then(response => response.text())
 .then(data => {
   document.getElementById('navbar').innerHTML = data;
 });

/* document.addEventListener('DOMContentLoaded', function() {
const container = document.querySelector('.container');
const image = document.querySelector('.image');
const video = document.querySelector('.video');

container.addEventListener('mouseover', function() {
image.style.display = 'none';
video.style.display = 'block';
video.play();
});

container.addEventListener('mouseout', function() {
video.style.display = 'none';
image.style.display = 'block';
video.pause();
video.currentTime = 0; // Reset video to start
});
});*/

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        const image = container.querySelector('.image');
        const video = container.querySelector('.video');

        container.addEventListener('mouseover', function() {
            image.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        container.addEventListener('mouseout', function() {
            video.style.display = 'none';
            image.style.display = 'block';
            video.pause();
            video.currentTime = 0; // Reset video to start
        });
    });
});


