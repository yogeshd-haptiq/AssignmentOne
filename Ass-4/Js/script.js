$(document).ready(function(){
    $('.autoplay').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="./Images/leftarrow.png" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./Images/rightarrow.png" alt=""></button>',
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 4,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 767,
settings: {
slidesToShow: 3,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
},
// $('.autoplay').slick({
// slidesToShow: 5,
// slidesToScroll: 1,
] 
});
});