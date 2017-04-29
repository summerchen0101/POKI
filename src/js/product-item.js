var $productCarousel = $("#product-carousel")
var $hotSaleCarousel = $("#hot-sale-carousel")
var $imgItem = $(".thumb-imgs .img-item")

$productCarousel.slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
});

$productCarousel.on('afterChange', (e, slick, index) => {
  $('.thumb-imgs').find('.img-item').removeClass('active')
  $($('.thumb-imgs').find('.img-item')[index]).addClass('active')
});

$imgItem.on("click", (e) => {
    var $targetItem = $(e.target).closest('div')
    var $index = $imgItem.index($targetItem)
    $productCarousel.slick("slickGoTo", $index)
})

$hotSaleCarousel.slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    variableWidth: false,
    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
})

