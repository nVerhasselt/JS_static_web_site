//variable slide

//#region init
let slideIndex = 0;
showSlides(slideIndex);
let next_button = document.getElementById("next_button");
let prev_button = document.getElementById("prev_button");

next_button.addEventListener("click", () => { console.log("next"); plusSlides(1); }, false);
prev_button.addEventListener("click",  () => {console.log("previous"); plusSlides(-1); }, false);

//variable print button
let print_button = document.getElementById("print_button");

// récupérer les dots dans le doc, sous forme de tableau (méthode getElementSByClassName)
let dots = document.getElementsByClassName("dot");

// On parcourt pour ajouter les listenner sur chaque dot
for(let i = 0; i < dots.length; ++i)
{
  console.log("dot " + i);
  
  dots[i].addEventListener("click", () => {currentSlide(i)});
}

let timer = window.setInterval(nextSlideAuto, 10000);
//window.clearInterval(timer);

//#endregion


//#region  methodes
function nextSlideAuto(){
  plusSlides(1);
}

function plusSlides(n) 
{
  slideIndex += n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n >= slides.length) 
  {
    console.log("Reset to 1");
    slideIndex = 0;
  }

  if (n < 0)
  {
    slideIndex = slides.length -1;
    console.log("Reset to slides.length");
  }
    
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
//#endregion


/************************************************************************************************ */
/*Print button*/

// Print window
print_button.addEventListener("click", printButtonClick, false);

function printButtonClick() {
    window.print();
}

