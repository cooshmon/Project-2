var S1s = ['giraffe', 'turtle', 'human'];
var S2s = ['blue', 'silly', 'deeply wise'];
var bSOnes = ['monkey', 'fruit', 'banana'];
var bsTwos = ['blue', 'silly', 'deeply wise'];
var images = [imgsrc='image/ME-4024-Sports-Ball-Soccer-2__42273.webp','','','','','','','','',]
var topSs = ['blue', 'silly', 'deeply wise'];
var botSs = ['blue', 'silly', 'deeply wise'];
var lSideSs = ['blue', 'silly', 'deeply wise'];
var rSideSs = ['blue', 'silly', 'deeply wise'];
function make_random_sentence()
{
  let S1 = S1s[Math.floor(Math.random() * S1s.length)];
  let S2 = S2s[Math.floor(Math.random() * S2s.length)];
  let bSOne = bSOnes[Math.floor(Math.random() * bSOnes.length)];
  let bsTwo = bsTwos[Math.floor(Math.random() * bsTwos.length)];
  let image = images[Math.floor(Math.random() * images.length)];
  let topS = topSs[Math.floor(Math.random() * topSs.length)];
  let botS = botSs[Math.floor(Math.random() * botSs.length)];
  let lSideS = lSideSs[Math.floor(Math.random() * lSideSs.length)];
  let rSideS = rSideSs[Math.floor(Math.random() * rSideSs.length)];
  let S1_slot = $('#S1-slot');
  let S2_slot = $('#S2-slot');
  let bSOne_slot = $('#bSOne-slot');
  let bsTwo_slot = $('#bsTwo-slot');
  let image_slot = $('#image-slot');
  let topS_slot = $('#topS-slot');
  let botS_slot = $('#botS-slot');
  let lSideS_slot = $('#lSideS-slot');
  let rSideS_slot = $('#rSideS-slot');

  S1_slot.text(S1);
  S2_slot.text(S2);
  bSOne_slot.text(bSOne);
  bsTwo_slot.text(bsTwo);
  image_slot.text(image);
  topS_slot.text(topS);
  botS_slot.text(botS);
  lSideS_slot.text(lSideS);
  rSideS_slot.text(rSideS);
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
