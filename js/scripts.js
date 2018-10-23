// alert("Funciona!!!");
// Boton Go Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("go-top").style.display = "block";
    } else {
        document.getElementById("go-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$('.carousel').carousel({
    interval: 1000
  });   
  $('.slide2').carousel({
    interval: 800
  });
// slidew swiper
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });

    
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

                 
    // wacker.classList.remove('is-active');
    // aliafor.classList.add('is-active');
    // aliafor.classList.remove('is-active');
    // donaldson.classList.add()