requirejs.config({
    paths:{
        'jquery':'../dil/jquery'
    }
})

define(['jquery'], function() {
    console.log($)
    
});