var $carousel = $(".carousel")
var $imgItem = $(".thumb-imgs .img-item")

$carousel.slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
});

$carousel.on('afterChange', (e, slick, index) => {
  $('.thumb-imgs').find('.img-item').removeClass('active')
  $($('.thumb-imgs').find('.img-item')[index]).addClass('active')
});

$imgItem.on("click", (e) => {
    var $targetItem = $(e.target).closest('div')
    var $index = $imgItem.index($targetItem)
    $carousel.slick("slickGoTo", $index)
})