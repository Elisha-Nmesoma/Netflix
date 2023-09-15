// const firstScroll = document.querySelector('.first-img-scroll');
// firstScroll.addEventListener('scroll', ()=>{
//     const mediaQuery = window.matchMedia('(min-width: 1020px)');
//     if (mediaQuery.matches) {
//         firstScroll.style.marginLeft = '-2rem';
//       }else{
//         firstScroll.style.marginLeft = '-1rem;
//       }
// });

// const imageContainers = document.querySelectorAll('.img-scroll');
// let activeContainer = null
// imageContainers.forEach(container =>{
//  container.addEventListener('scroll', ()=>{

//     const mediaQuery = window.matchMedia('(min-width: 1020px)');

//     if (activeContainer && activeContainer !== container) {
//         activeContainer.style.marginLeft = '0'; 
//       }
//       // Set the current container as the active one
//       activeContainer = container;

//       if (mediaQuery.matches) {
//         container.style.marginLeft = '-2rem';
//       }else{
//         container.style.marginLeft = '-1rem';
//       }
//  });
// });

const navBar = document.querySelector('nav');
window.addEventListener('scroll', ()=> {
   const div = navBar.querySelector('.img-3') 
      if(window.scrollY >=100){
         navBar.classList.add('nav-black')
         div.classList.add('nav-black')
      }else{
          navBar.classList.remove('nav-black')
          div.classList.remove('nav-black')
      }
});
