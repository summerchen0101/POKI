console.log("hi")

$('.carousel').slick({
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
});

