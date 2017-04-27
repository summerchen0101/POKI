var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
if(currentRoute === '') currentRoute = 'index'

var filePath = `./${currentRoute}.js`

try{
    require(filePath)
}catch(err){
    console.log(`No such file --> ${filePath}`)
}
