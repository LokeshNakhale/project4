// locomotive js github (smooth) copy karna hai
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

 var elemC = document.querySelector("#elem-container")
 var fixed = document.querySelector("#fixed-image")

 elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
 })
 elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
 })


function hoverImgAnimation(){
   var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
 e.addEventListener("mouseenter",function(){
   var image = e.getAttribute("data-image")
   fixed.style.backgroundImage=`url(${image})`
 })
})
}
hoverImgAnimation()
 



function swiperAnimation(){
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
swiperAnimation()

var menu = document.querySelector("#page1 .nav-part2 h2")
var full = document.querySelector("#full-scr")

menu.addEventListener("click",function(){
   full.style.top="0"
   menu.style.display="none"
})

var close = document.querySelector("#full-scr h2")
close.addEventListener("click",function(){
   full.style.top="-100%"
    menu.style.display="block"
})