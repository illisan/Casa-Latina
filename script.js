$(function() {

  $('.hamburger').on('click', function() {
    $('.hamburger-content').toggle('slow')
  });

})
$ (function buttonFunction() {
    $('.form-button').on('click',function (){
      alert("Thank you for getting in touch. We'll get back to you shortly!");
    })
})
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
