const TopBtn = document.querySelector('.btn');
const Nav = document.querySelector('nav')

TopBtn.addEventListener('click',function(){
         
          let scY = window.scrollY;
          scY = Nav.scrollTop
          window.scrollTo(0,scY);
       
    })