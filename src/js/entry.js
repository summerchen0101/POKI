var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
if(currentRoute === '') currentRoute = 'index'

var filePath = `./${currentRoute}.js`

try{
    require(filePath)
}catch(err){
    console.log(`No such file --> ${filePath}`)
}


$( window ).on("scroll", () => {
    var $scrollTop = $(window).scrollTop()
    var $header = $(".header")
    if($scrollTop > 200) {
        $header.addClass("fixed")
    }else {
        $header.removeClass("fixed")
        unDoActiveMode()
    }
});

var $header = $(".header")
var $menu = $header.find('.menu-btn')

$('.menu-btn').on("click", (e) => {
    var $header = $(".header")
    if(!$header.hasClass('active')) {
        doActiveMode()
    }else {
        unDoActiveMode()
    }
})

function doActiveMode() {
    $header.addClass("active")
    $menu.removeClass('icon-menu').addClass('icon-close')
}

function unDoActiveMode() {
    $header.removeClass("active")
    $menu.removeClass('icon-close').addClass('icon-menu')
}