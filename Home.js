 /*-----------------new products----------------------------------------------------------------------*/
 document.addEventListener('DOMContentLoaded', function() {
    let spans = document.querySelectorAll('.header p span');
    let product = document.getElementsByClassName('product');
    let product_page = Math.ceil(product.length / 4);
    let l = 0;
    let movePer = 25.34;
    let maxMove = 203;
  
    let mob_view = window.matchMedia("(max-width: 768px)");
    if (mob_view.matches) {
      movePer = 50.36;
      maxMove = 504;
    }
  
    let right_mover = () => {
      l = l + movePer;
      if (product_page == 1) { l = 0; }
      for (const i of product) {
        if (l > maxMove) { l = l - movePer; }
        i.style.left = `-${l}%`; 
      }
    }
  
    let left_mover = () => {
      l = l - movePer;
      if (l <= 0) { l = 0; }
      for (const i of product) {
        if (product_page > 1) {
          i.style.left = `-${l}%`; 
        }
      }
    }
  
    spans[1].onclick = () => { right_mover(); }
    spans[0].onclick = () => { left_mover(); }
  
  });

  /*-----------------slideshow----------------------------------------------------------------------*/

  let slideIndex = 1;
  showSlides(slideIndex);
  
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  
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

  
