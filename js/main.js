//   headerScroll
function headerScroll(){
    let header = document.querySelector('.header');
      if (window.pageYOffset > 50) {
         header.classList.add('header-active');
      } else {
        header.classList.remove('header-active');
      }
  }
  
  window.onscroll=headerScroll;
  headerScroll();
  
//   headerScroll