$('.menu__item ul').hide();
$(".menu__item a").click(function() {
    $(this).parent(".menu__item").children("ul").slideToggle("100");

});
let arrows = document.querySelectorAll('.menu__link');
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function() {
        this.querySelector('.arrow').classList.toggle('rotated');


    });
}