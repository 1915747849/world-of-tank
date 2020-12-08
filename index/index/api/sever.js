define(['jquery'], function($) {
    function getimg(){
        return $.ajax('../api/moch/imges.json')
    }
    function gettext(){
        return $.ajax('../api/moch/texts.json')
    }

    return {    
        getimg,
        gettext
    }
});