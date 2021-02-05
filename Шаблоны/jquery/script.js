import $ from 'jquery';

$(document).ready(function(){
    const btn = $('#btn'); //$ - функция по получению элемента

    console.log(btn);

    $(".list-item:first").hover(function(){
        $(this).toggleClass('active');
    });

    const val = $('.list-item:eq(2)');
    val.on('click' , function(){ 
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click' , function(){ 
        $('.image:even').animate({
            opacity: 'toggle',
            height : 'toggle'
        }, 2000);
    });
});

