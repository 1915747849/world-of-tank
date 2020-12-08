
function navopen(){
            $('.kuang').on('click' , function(){
                var turnoff = true
                if($('section').eq( $('.kuang').index($(this)) ).css('display') == 'none'){
                    $('section').slideUp()
                    turnoff = true
                }else{
                    turnoff = false
                }
                if(turnoff){
                    $('section').eq( $('.kuang').index($(this)) ).slideDown()
                    turnoff = false
                }
                else{
                    $('section').eq( $('.kuang').index($(this)) ).slideUp()
                    turnoff = true
                }
            })
}