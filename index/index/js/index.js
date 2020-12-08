requirejs.config({
    paths:{
        'jquery':'../dil/jquery'
    }
})

define(['../dil/jquery' , '../api/sever.js','../js/module/imges.js'], function($,{getimg},initimges) {
    getimg().then((res)=>{
        console.log($)
        console.log(res)
        initimges(res);
        navopen()
        bannermove()
    })
});

 //  鼠标点击出现下拉菜单
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
// 轮播图
 function bannermove(){
     var num = 5;
     console.log($('.maincont>li'))
     buttonmove()
     function buttonmove(){
        $('.buttonmove>li').removeClass()
        $('.buttonmove>li').eq(num).addClass('active')
     }

     $('.buttonmove > li').on('click',function(){
        $('.buttonmove>li').removeClass()
         $(this).addClass('active')
         num = ($(this).addClass('active').index())
         $('.maincont>li').eq(num).css('left',)
     })

     $('.leftbottom').on('click',function(){

     })

     $('.rightbottom').on('click',function(){
         
    })
 }