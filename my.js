var S1s = ['giraffe', 'turtle', 'human'];
var S2s = ['blue', 'silly', 'deeply wise'];
var bSOnes = ['monkey', 'fruit', 'banana'];
var bsTwos = ['blue', 'silly', 'deeply wise'];
var images = ['image/ME-4024-Sports-Ball-Soccer-2__42273.webp','','','','','','','','',]

function make_random_sentence()
{
  let S1 = S1s[Math.floor(Math.random() * S1s.length)];
  let S2 = S2s[Math.floor(Math.random() * S2s.length)];
  let bSOne = bSOnes[Math.floor(Math.random() * bSOnes.length)];
  let bsTwo = bsTwos[Math.floor(Math.random() * bsTwos.length)];
  let image = images[Math.floor(Math.random() * images.length)];

  let S1_slot = $('#S1-slot');
  let S2_slot = $('#S2-slot');
  let bSOne_slot = $('#bSOne-slot');
  let bsTwo_slot = $('#bsTwo-slot');
  let image_slot = $('#image-slot');

  S1_slot.text(S1);
  S2_slot.text(S2);
  image_slot.text(image);
  bSOne_slot.text(bSOne);
  bsTwo_slot.text(bsTwo);
}

$(document).ready(function() {
  make_random_sentence();

  window.addEventListener('resize', function() {
    make_random_sentence();
  
  });
});


const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);
