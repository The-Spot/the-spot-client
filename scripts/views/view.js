'use strict';

$(document).ready(function() {
  $('.container').hide();
  $('.home').show();
});

$('.enter').click('submit', (event) => {
  event.preventDefault();
  $('.container').hide();
  $('.form').show();
});


$('.show-results').click('submit', (event) => {
  event.preventDefault();
  $('.container').hide();
  $('.results').show();
});


// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 800) {
//     $('.footer').fadeIn();
//   } else {
//     $('.footer').fadeOut();
//   }
// });


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}