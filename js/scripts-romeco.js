$( document ).ready(function() {
  console.log( "document loaded" );
  // js propio
  
  const btnBurguer = document.querySelector('.btn-burguer');
  const menu = document.querySelector('.menu-principal');
    // console.log(btnBurguer);
    // console.log(menu);

  btnBurguer.addEventListener('click', hideShow);

  function hideShow (){
    if(menu.classList.contains('is-active')){
      menu.classList.remove('is-active');
      btnBurguer.classList.add('icon-menu');
      btnBurguer.classList.remove('icon-close');
    } else{
      
      menu.classList.add('is-active');
      btnBurguer.classList.remove('icon-menu');
      btnBurguer.classList.add('icon-close');
    }
  }
  // Boton Scroll Top

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {
        document.querySelector('.scrollTop').style.display = "block";
    } else {
        document.querySelector('.scrollTop').style.display = "none";
    }
}
// swiper Slide Marcas
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 50,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
// Fin Swiper Slide Marcas
// aside menu
var list = document.getElementsByClassName('acordion');
var list2 = document.getElementsByClassName('panel');
//    console.log(list);
//    console.log(list2);


list[0].addEventListener('click', mostrar);
list[1].addEventListener('click', mostrar2);
list[2].addEventListener('click', mostrar3);
list[3].addEventListener('click', mostrar4);
list[4].addEventListener('click', mostrar5);
list[5].addEventListener('click', mostrar6);

function mostrar(){
 if(list2[0].classList.contains('active')){
   list2[0].classList.toggle('active');
 } else{
   list2[0].classList.toggle('active');
 }
}
function mostrar2(){
 if(list2[1].classList.contains('active')){
   list2[1].classList.toggle('active');
 } else{
   list2[1].classList.toggle('active');
 }
}
function mostrar3(){
 if(list2[2].classList.contains('active')){
   list2[2].classList.toggle('active');
 } else{
   list2[2].classList.toggle('active');
 }
}
function mostrar4(){
 if(list2[3].classList.contains('active')){
   list2[3].classList.toggle('active');
 } else{
   list2[3].classList.toggle('active');
 }
}
function mostrar5(){
 if(list2[4].classList.contains('active')){
   list2[4].classList.toggle('active');
 } else{
   list2[4].classList.toggle('active');
 }
}
function mostrar6(){
 if(list2[5].classList.contains('active')){
   list2[5].classList.toggle('active');
 } else{
   list2[5].classList.toggle('active');
 }
}
});

  