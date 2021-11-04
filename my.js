// var S1s = ['Pro Soccer1', 'Pro Soccer2', 'Pro Soccer3'];
// var S2s = ['Accounting1', 'Accounting2', 'Accounting3'];
// var bSOnes = ['Art Criticism1', 'Art Criticism2', 'Art Criticism3'];
// var bsTwos = ['blue', 'silly', 'deeply wise'];
// var images = [imgsrc='image/ME-4024-Sports-Ball-Soccer-2__42273.webp','','','','','','','','',]
// var topSs = ['blue', 'silly', 'deeply wise'];
// var botSs = ['blue', 'silly', 'deeply wise'];
// var lSideSs = ['blue', 'silly', 'deeply wise'];
// var rSideSs = ['blue', 'silly', 'deeply wise'];
// function make_random_sentence()
// {
//   let S1 = S1s[Math.floor(Math.random() * S1s.length)];
//   let S2 = S2s[Math.floor(Math.random() * S2s.length)];
//   let bSOne = bSOnes[Math.floor(Math.random() * bSOnes.length)];
//   let bsTwo = bsTwos[Math.floor(Math.random() * bsTwos.length)];
//   let image = images[Math.floor(Math.random() * images.length)];
//   let topS = topSs[Math.floor(Math.random() * topSs.length)];
//   let botS = botSs[Math.floor(Math.random() * botSs.length)];
//   let lSideS = lSideSs[Math.floor(Math.random() * lSideSs.length)];
//   let rSideS = rSideSs[Math.floor(Math.random() * rSideSs.length)];
//   let S1_slot = $('#S1-slot');
//   let S2_slot = $('#S2-slot');
//   let bSOne_slot = $('#bSOne-slot');
//   let bsTwo_slot = $('#bsTwo-slot');
//   let image_slot = $('#image-slot');
//   let topS_slot = $('#topS-slot');
//   let botS_slot = $('#botS-slot');
//   let lSideS_slot = $('#lSideS-slot');
//   let rSideS_slot = $('#rSideS-slot');

//   S1_slot.text(S1);
//   S2_slot.text(S2);
//   bSOne_slot.text(bSOne);
//   bsTwo_slot.text(bsTwo);
 
//   topS_slot.text(topS);
//   botS_slot.text(botS);
//   lSideS_slot.text(lSideS);
//   rSideS_slot.text(rSideS);
//   image_slot.text(image);
// }

// $(document).ready(function() {
//   make_random_sentence();

//   window.addEventListener('resize', function() {
//     make_random_sentence();
  
//   });
// });


// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

window.addEventListener('resize', reportWindowSize);
let outer = document.getElementById('outer'),
        wrapper = document.getElementById('wrap'),
        maxWidth  = outer.clientWidth,
        maxHeight = outer.clientHeight;
window.addEventListener("resize", resize);
resize();
function resize(){let scale,
    width = window.innerWidth,
  height = window.innerHeight,
  isMax = width >= maxWidth && height >= maxHeight;

    scale = Math.min(width/maxWidth, height/maxHeight);
    outer.style.transform = isMax?'':'scale(' + scale + ')';
    wrapper.style.width = isMax?'':maxWidth * scale;
    wrapper.style.height = isMax?'':maxHeight * scale;
}



var selectedElement, offset, transform;
function startDrag(evt) {
  if (evt.target.classList.contains('draggable')) {
    selectedElement = evt.target;
    offset = getMousePosition(evt);
    // Get all the transforms currently on this element
    var transforms = selectedElement.transform.baseVal;
    // Ensure the first transform is a translate transform
    if (transforms.length === 0 ||
        transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
      // Create an transform that translates by (0, 0)
      var translate = svg.createSVGTransform();
      translate.setTranslate(0, 0);
      // Add the translation to the front of the transforms list
      selectedElement.transform.baseVal.insertItemBefore(translate, 0);
    }
    // Get initial translation amount
    transform = transforms.getItem(0);
    offset.x -= transform.matrix.e;
    offset.y -= transform.matrix.f;
  }
}